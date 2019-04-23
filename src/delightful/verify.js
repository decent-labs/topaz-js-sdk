const multihash = require('../utils/hashing');

const verify = (input, objectId, api) => {
  const dataHash = multihash(input);

  return api.objects.get(objectId)
    .then(data => Promise.all([data, ...getHashes(data, dataHash, api)]))
    .then(([object, ...hashes]) => Promise.all([object, ...getProofs(hashes, api)]))
    .then(([object, ...hashes]) => finalize(object, hashes, dataHash));
};

const getHashes = (object, dataHash, api) => {
  return object.hashes.map(hash => {
    if (hash.hash == dataHash) {
      return api.hashes.get(object.id, hash.id).then(data => {
        hash.proof = data.proofId;
        return hash;
      });
    } else return hash;
  });
};

const getProofs = (hashes, api) => {
  return hashes.map(hash => {
    if (hash.proof !== null && hash.proof !== undefined) {
      return api.proofs.get(hash.proof).then(data => {
        hash.proof = data;
        return hash;
      });
    } else return hash;
  })
}

const finalize = (object, hashes, dataHash) => {
  object.hashes = hashes;
  object.verified = makeStatus(object, dataHash);
  return object;
};

const makeStatus = (object, dataHash) => {
  if (!hashExists(object.hashes, dataHash)) return "unverified";

  const recentHash = object.hashes[object.hashes.length - 1];
  if (recentHash.hash === dataHash) {
    if (recentHash.proof !== null) return "latest";
    if (recentHash.proof === null) return "pending";
  }

  const outdatedHashes = object.hashes.slice(0, object.hashes.length);
  if (hashExists(outdatedHashes, dataHash)) return "outdated";

  return "unknown";
};

const hashExists = (hashes, dataHash) => {
  return hashes.filter(hash => hash.hash === dataHash).length > 0;
};

module.exports = verify;
