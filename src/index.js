const Topaz = require('./topaz');
const trust = require('./delightful/trust');

const topazExports = (opts) => {
  const api = new Topaz.ApiClient(opts);

  const objectsApi = new Topaz.ObjectsApi(api);
  const hashesApi = new Topaz.HashesApi(api);
  const proofsApi = new Topaz.ProofsApi(api);

  return {
    appId: opts.appId,

    trust: (input) => trust(input, objectsApi, hashesApi),

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
}

module.exports = topazExports;
