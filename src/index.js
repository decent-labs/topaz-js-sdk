const Topaz = require('./topaz');

const multihash = require('./utils/hashing');

const trust = require('./delightful/trust');
const verify = require('./delightful/verify');

const topazExports = (opts) => {
  const api = baseApi(opts);

  return {
    appId: opts.appId,
    trust: (input, objectId) => trust(input, objectId, api),
    verify: (input, objectId) => verify(input, objectId, api),
    utils: { hash: (input) => multihash(input) },
    ...api
  };
};

const baseApi = (opts) => {
  const apiClient = new Topaz.ApiClient(opts);
  const objectsApi = new Topaz.ObjectsApi(apiClient);
  const hashesApi = new Topaz.HashesApi(apiClient);
  const proofsApi = new Topaz.ProofsApi(apiClient);

  return {
    objects: {
      create: objectsApi.createObject,
      find: objectsApi.findObjects,
      get: objectsApi.getObject
    },
    hashes: {
      create: hashesApi.createHash,
      find: hashesApi.findHashes,
      get: hashesApi.getHash
    },
    proofs: {
      find: proofsApi.findProofs,
      get: proofsApi.getProof
    }
  };
};

module.exports = topazExports;
