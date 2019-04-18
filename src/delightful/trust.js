const multihash = require('../utils/hashing');

const trust = (input, objectId, api) => {
  return getObject(objectId, api).then(objectId => {
    const hash = multihash(input);
    return Promise.all([objectId, api.hashes.create(objectId, { hash })]);
  }).then(([objectId, _]) => {
    return api.objects.get(objectId);
  }).then(({ data }) => {
    return { data: input, object: data }
  });
};

const getObject = (objectId, api) => {
  if (objectId !== null && objectId !== undefined) {
    return Promise.resolve(objectId);
  } else {
    return api.objects.create().then(({ data }) => data.id);
  }
};

module.exports = trust;
