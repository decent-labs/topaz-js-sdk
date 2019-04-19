const multihash = require('../utils/hashing');

const verify = (input, objectId, api) => {
  return api.objects.get(objectId)
    .then(processHashes(multihash(input), api))
    .then(processProofs(api))
    .then(pluckProofs())
    .then(returnData());
};

const processHashes = (hash, api) => {
  return ({ data }) => Promise.all([data, ...distillHashes(data, hash, api)])
};

const distillHashes = (data, hash, api) => {
  return mapHashes(filterHashes(data, hash), data.id, api);
};

const filterHashes = (data, hash) => {
  return data.hashes.filter(h => h.hash == hash);
};

const mapHashes = (hashes, objectId, api) => {
  return hashes.map(h => getHash(h, objectId, api));
};

const getHash = (hash, objectId, api) => {
  return api.hashes.get(objectId, hash.id);
};

const processProofs = (api) => {
  return ([object, ...hashes]) => Promise.all([object, ...distillProofs(hashes, api)])
};

const distillProofs = (hashes, api) => {
  return hashes.map(hash => getProofs(hash, api));
};

const getProofs = (hash, api) => {
  return api.proofs.get(hash.data.proofId);
};

const pluckProofs = () => {
  return ([object, ...proofs]) => Promise.all([object, proofs.map(p => p.data)])
};

const returnData = () => {
  return ([object, proofs]) => ({ object, proofs })
};

module.exports = verify;
