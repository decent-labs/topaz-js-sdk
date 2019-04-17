const Topaz = require('./topaz');

const topazExports = (opts) => {
  const api = new Topaz.ApiClient(opts);
  
  const appsApi = new Topaz.AppsApi(api);
  const objectsApi = new Topaz.ObjectsApi(api);
  const hashesApi = new Topaz.HashesApi(api);
  const proofsApi = new Topaz.ProofsApi(api);

  return {
    apps: {
      create: appsApi.createApp,
      find: appsApi.findApps,
      get: appsApi.getApp
    },
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
