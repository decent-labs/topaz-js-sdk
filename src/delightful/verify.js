const multihash = require('../utils/hashing');

const verify = (input, objectId, api) => {
  return api.objects.get(objectId).then(({ data }) => {
    return Promise.all([
      data,
      ...data.hashes.map(hash => {
        if (hash.hash == multihash(input)) {
          return api.hashes.get(data.id, hash.id).then(({ data }) => {
            hash.proof = data.proofId;
            return hash;
          });
        } else return hash;
      })
    ])
  })
  .then(([object, ...hashes]) => {
    return Promise.all([
      object,
      ...hashes.map(hash => {
        if (hash.proof !== null && hash.proof !== undefined) {
          return api.proofs.get(hash.proof).then(({ data }) => {
            hash.proof = data;
            return hash;
          });
        } else return hash;
      })
    ])
  })    
  .then(([object, ...hashes]) => {
    object.hashes = hashes;
    return object;
  });
};

module.exports = verify;
