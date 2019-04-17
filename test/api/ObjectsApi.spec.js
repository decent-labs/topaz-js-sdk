const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/topaz');

describe('ObjectsApi', () => {
  const objectsTests = (appId, create, find, get) => {
    describe('createObject', () => {
      const expects = (data, response, done) => {
        expect(data.appId).to.be(appId());
        expect(response.statusCode).to.be(201);
        done();
      };
  
      it('should call createObject successfully using promises', (done) => {
        create()(appId()).then(({ data, response }) => {
          expects(data, response, done);
        });
      });
  
      it('should call createObject successfully using callbacks', (done) => {
        create()(appId(), (_, data, response) => {
          expects(data, response, done);
        });
      });
    });
  
    describe('findObjects', () => {
      const expects = (data, response, done) => {
        expect(data).to.have.length(2);
        expect(response.statusCode).to.be(200);
        done();
      };
  
      it('should call findObjects successfully using promises', (done) => {
        create()(appId())
        .then(() => create()(appId()))
        .then(() => find()(appId()))
        .then(({ data, response }) => {
          expects(data, response, done)
        });
      });
  
      it('should call findObjects successfully using callbacks', (done) => {
        create()(appId(), () => {
          create()(appId(), () => {
            find()(appId(), (_, data, response) => {
              expects(data, response, done)
            });
          });
        });
      });
    });
  
    describe('getObject', () => {
      const expects = (objectId, data, response, done) => {
        expect(data.id).to.be(objectId);
        expect(response.statusCode).to.be(200);
        done();
      };
  
      it('should call getObject successfully using promises', (done) => {
        create()(appId())
        .then(({ data, _ }) => Promise.all([get()(appId(), data.id), data.id]))
        .then(([{ data, response }, objectId]) => {
          expects(objectId, data, response, done)
        });
      });
  
      it('should call getObject successfully using callbacks', (done) => {
        create()(appId(), (_, createData, __) => {
          get()(appId(), createData.id, (_, getData, getResponse) => {
            expects(createData.id, getData, getResponse, done);
          });
        });
      });
    });
  };

  describe('legacy interface', () => {
    let objectsApi;
    let appId;

    beforeEach('get a fresh api instance with an app', (done) => {
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

    beforeEach('get a fresh api instance with an app', (done) => {
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
