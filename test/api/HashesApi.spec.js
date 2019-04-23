const expect = require('expect.js');
const random = require('../helpers/random');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/topaz');

describe('HashesApi', () => {
  const hashesTests = (objectId, create, find, get) => {
    describe('createHash', () => {
      const hash = random.sha256Base58Multihash();
  
      const expects = (hash, data, done) => {
        expect(data.hash).to.be(hash);
        expect(data.objectId).to.be(objectId());
        done();
      };
  
      it('should call createObject successfully using promises', done => {
        create()(objectId(), { hash }).then(data => {
          expects(hash, data, done);
        });
      });
  
      it('should call createObject successfully using callbacks', done => {
        create()(objectId(), { hash }, (_, data) => {
          expects(hash, data, done);
        });
      });
    });
  
    describe('findHashes', () => {
      const hash1 = random.sha256Base58Multihash();
      const hash2 = random.sha256Base58Multihash();
  
      const expects = (data, done) => {
        expect(data).to.have.length(2);
        done();
      };
  
      it('should call findHashes successfully using promises', done => {
        create()(objectId(), { hash: hash1 })
        .then(() => create()(objectId(), { hash: hash2 }))
        .then(() => find()(objectId()))
        .then(data => {
          expects(data, done)
        });
      });
  
      it('should call findHashes successfully using callbacks', done => {
        create()(objectId(), { hash: hash1 }, () => {
          create()(objectId(), { hash: hash2 }, () => {
            find()(objectId(), (_, data) => {
              expects(data, done)
            });
          });
        });
      });
    });
  
    describe('getHash', () => {
      const hash = random.sha256Base58Multihash();
  
      const expects = (hashId, data, done) => {
        expect(data.id).to.be(hashId);
        done();
      };
  
      it('should call getHash successfully using promises', done => {
        create()(objectId(), { hash })
        .then(data => Promise.all([get()(objectId(), data.id), data.id]))
        .then(([data, hashId]) => {
          expects(hashId, data, done)
        });
      });
  
      it('should call getHash successfully using callbacks', done => {
        create()(objectId(), { hash }, (_, createData, __) => {
          get()(objectId(), createData.id, (_, data) => {
            expects(createData.id, data, done);
          });
        });
      });
    });
  };

  describe('legacy interface', () => {
    let hashesApi;
    let objectId;

    beforeEach('get a fresh api instance with an app and object', done => {
      setup.freshInstanceLegacy().then(api => {
        const objectsApi = new TopazApi.ObjectsApi(api);
        return Promise.all([objectsApi.createObject(), api]);
      }).then(([data, api]) => {
        objectId = data.id
        hashesApi = new TopazApi.HashesApi(api)
        done();
      });
    });

    hashesTests(
      () => objectId,
      () => hashesApi.createHash,
      () => hashesApi.findHashes,
      () => hashesApi.getHash
    );
  });

  describe('new interface', () => {
    let hashes;
    let objectId;

    beforeEach('get a fresh api instance with an app and object', done => {
      setup.freshInstance().then(api => {
        return Promise.all([api.objects.create(), api]);
      }).then(([data, api]) => {
        objectId = data.id;
        hashes = api.hashes;
        done();
      });
    });

    hashesTests(
      () => objectId,
      () => hashes.create,
      () => hashes.find,
      () => hashes.get
    );
  });
});
