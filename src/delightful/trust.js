const multihash = require('../utils/hashing');

const trust = (input, objectId, objectsApi, hashesApi) => {
  return getObject(objectId, objectsApi).then(objectId => {
    const hash = multihash(input);
    return Promise.all([objectId, hashesApi.createHash(objectId, { hash })]);
  }).then(([objectId, _]) => {
    return objectsApi.getObject(objectId);
  }).then(({ data }) => {
    return { data: input, object: data }
  });
};

const getObject = (objectId, objectsApi) => {
  if (objectId !== null && objectId !== undefined) {
    return Promise.resolve(objectId);
  } else {
    return objectsApi.createObject().then(({ data }) => data.id);
  }
};

module.exports = trust;
