const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/topaz');

describe('ObjectsApi', () => {
  const objectsTests = (appId, create, find, get) => {
    describe('createObject', () => {
      const expects = (data, done) => {
        expect(data.appId).to.be(appId());
        done();
      };
  
      it('should call createObject successfully using promises', done => {
        create()().then(data => {
          expects(data, done);
        });
      });
  
      it('should call createObject successfully using callbacks', done => {
        create()((_, data) => {
          expects(data, done);
        });
      });
    });
  
    describe('findObjects', () => {
      const expects = (data, done) => {
        expect(data).to.have.length(2);
        done();
      };
  
      it('should call findObjects successfully using promises', done => {
        create()()
        .then(() => create()())
        .then(() => find()())
        .then(data => {
          expects(data, done)
        });
      });
  
      it('should call findObjects successfully using callbacks', done => {
        create()(() => {
          create()(() => {
            find()((_, data) => {
              expects(data, done)
            });
          });
        });
      });
    });
  
    describe('getObject', () => {
      const expects = (objectId, data, done) => {
        expect(data.id).to.be(objectId);
        done();
      };
  
      it('should call getObject successfully using promises', done => {
        create()()
        .then(data => Promise.all([get()(data.id), data.id]))
        .then(([data, objectId]) => {
          expects(objectId, data, done)
        });
      });
  
      it('should call getObject successfully using callbacks', done => {
        create()((_, createData, __) => {
          get()(createData.id, (_, data) => {
            expects(createData.id, data, done);
          });
        });
      });
    });
  };

  describe('legacy interface', () => {
    let objectsApi;
    let appId;

    beforeEach('get a fresh api instance with an app', done => {
      setup.freshInstanceLegacy().then(api => {
        appId = api.appId;
        objectsApi = new TopazApi.ObjectsApi(api);
        done();
      });
    });

    objectsTests(
      () => appId,
      () => objectsApi.createObject,
      () => objectsApi.findObjects,
      () => objectsApi.getObject
    );
  });

  describe('new interface', () => {
    let objects;
    let appId;

    beforeEach('get a fresh api instance with an app', done => {
      setup.freshInstance().then(api => {
        appId = api.appId;
        objects = api.objects;
        done();
      });
    });

    objectsTests(
      () => appId,
      () => objects.create,
      () => objects.find,
      () => objects.get
    );
  });
});
