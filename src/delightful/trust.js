const multihash = require('../utils/hashing');

const trust = (input, objectsApi, hashesApi) => {
  const hash = multihash(input);
  return objectsApi.createObject().then(({ data }) => {
    return Promise.all([data, hashesApi.createHash(data.id, { hash })]);
  }).then(([object, _]) => {
    return objectsApi.getObject(object.id);
  }).then(({ data }) => {
    return { data: input, object: data }
  });
};

module.exports = trust;
