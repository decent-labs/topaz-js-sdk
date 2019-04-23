const multihash = require('../utils/hashing');

const trust = (input, objectId, api) => {
  const hash = multihash(input);
  return getObject(objectId, api)
    .then(objectId => Promise.all([objectId, api.hashes.create(objectId, { hash })]))
    .then(([objectId, _]) => api.objects.get(objectId))
    .then(data => ({ data: input, object: data }));
};

const getObject = (objectId, api) => {
  if (objectId !== null && objectId !== undefined) {
    return Promise.resolve(objectId);
  } else {
    return api.objects.create().then(data => data.id);
  }
};

module.exports = trust;
