'use strict';

const expect = require('expect.js');
const random = require('../helpers/random');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/index');

describe('HashesApi', function() {
  let hashesApi;
  let objectId;

  beforeEach('get a fresh api instance with an app and object', function (done) {
    setup.freshInstance().then(api => {
      const appsApi = new TopazApi.AppsApi(api);
      return Promise.all([appsApi.createApp({ name: 'test', interval: 3600 }), api]);
    }).then(([{ data }, api]) => {
      const objectsApi = new TopazApi.ObjectsApi(api, data.id);
      return Promise.all([objectsApi.createObject(), data.id, api]);
    }).then(([{ data }, appId, api]) => {
      objectId = data.id
      hashesApi = new TopazApi.HashesApi(api, appId, objectId)
      done();
    });
  });

  describe('createHash', function () {
    const hash = random.sha256Base58Multihash();

    const expects = (hash, data, response, done) => {
      expect(data.hash).to.be(hash);
      expect(data.objectId).to.be(objectId);
      expect(response.statusCode).to.be(201);
      done();
    };

    it('should call createObject successfully using promises', function(done) {  
      hashesApi.createHash({ hash }).then(({ data, response }) => {
        expects(hash, data, response, done);
      });
    });

    it('should call createObject successfully using callbacks', function(done) {
      hashesApi.createHash({ hash }, (_, data, response) => {
        expects(hash, data, response, done);
      });
    });
  });

  describe('findHashes', function() {
    const hash1 = random.sha256Base58Multihash();
    const hash2 = random.sha256Base58Multihash();

    const expects = (data, response, done) => {
      expect(data).to.have.length(2);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call findHashes successfully using promises', function(done) {
      hashesApi.createHash({ hash: hash1 })
      .then(() => hashesApi.createHash({ hash: hash2 }))
      .then(() => hashesApi.findHashes())
      .then(({ data, response }) => {
        expects(data, response, done)
      });
    });

    it('should call findHashes successfully using callbacks', function(done) {
      hashesApi.createHash({ hash: hash1 }, () => {
        hashesApi.createHash({ hash: hash2 }, () => {
          hashesApi.findHashes((_, data, response) => {
            expects(data, response, done)
          });
        });
      });
    });
  });

  describe('getHash', function() {
    const hash = random.sha256Base58Multihash();

    const expects = (hashId, data, response, done) => {
      expect(data.id).to.be(hashId);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call getHash successfully using promises', function(done) {
      hashesApi.createHash({ hash })
      .then(({ data, _ }) => Promise.all([hashesApi.getHash(data.id), data.id]))
      .then(([{ data, response }, hashId]) => {
        expects(hashId, data, response, done)
      });
    });

    it('should call getHash successfully using callbacks', function(done) {
      hashesApi.createHash({ hash }, (_, createData, __) => {
        hashesApi.getHash(createData.id, (_, getData, getResponse) => {
          expects(createData.id, getData, getResponse, done);
        });
      });
    });
  });
});
