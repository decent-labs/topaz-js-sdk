const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/topaz');

describe('AppsApi', () => {
  const appsTests = (create, find, get) => {
    describe('createApp', () => {
      const params = { name: 'my first app', interval: 3600 };
  
      const expects = (params, data, response, done) => {
        expect(data.name).to.be(params.name);
        expect(data.interval).to.be(params.interval);
        expect(response.statusCode).to.be(201);
        done();
      };
  
      it('should call createApp successfully using promises', (done) => {
        create()(params).then(({ data, response }) => {
          expects(params, data, response, done);
        });
      });
  
      it('should call createApp successfully using callbacks', (done) => {
        create()(params, (_, data, response) => {
          expects(params, data, response, done);
        });
      });
    });
  
    describe('findApps', () => {
      const expects = (data, response, done) => {
        expect(data).to.have.length(2);
        expect(response.statusCode).to.be(200);
        done();
      };
  
      it('should call findApps successfully using promises', (done) => {
        create()({ name: 'a', interval: 30 })
        .then(() => create()({ name: 'b', interval: 30 }))
        .then(() => find()())
        .then(({ data, response }) => {
          expects(data, response, done)
        });
      });
  
      it('should call findApps successfully using callbacks', (done) => {
        create()({ name: 'a', interval: 30 }, () => {
          create()({ name: 'b', interval: 30 }, () => {
            find()((_, data, response) => {
              expects(data, response, done)
            });
          });
        });
      });
    });
  
    describe('getApp', () => {
      const expects = (appId, data, response, done) => {
        expect(data.id).to.be(appId);
        expect(response.statusCode).to.be(200);
        done();
      };
  
      it('should call getApp successfully using promises', (done) => {
        create()({ name: 'other app', interval: 3600 })
        .then(({ data, _ }) => Promise.all([get()(data.id), data.id]))
        .then(([{ data, response }, appId]) => {
          expects(appId, data, response, done)
        });
      });
  
      it('should call getApp successfully using callbacks', (done) => {
        create()({ name: 'other app', interval: 3600 }, (_, createData, __) => {
          get()(createData.id, (_, getData, getResponse) => {
            expects(createData.id, getData, getResponse, done);
          });
        });
      });
    });
  };

  describe('legacy interface', () => {
    let appsApi;

    beforeEach('get a fresh api instance', (done) => {
      setup.freshInstanceLegacy().then(api => {
        appsApi = new TopazApi.AppsApi(api);
        done();
      });
    });

    appsTests(
      () => appsApi.createApp,
      () => appsApi.findApps,
      () => appsApi.getApp
    );
  });

  describe('new interface', () => {
    let apps;

    beforeEach('get a fresh api instance', (done) => {
      setup.freshInstance().then(api => {
        apps = api.apps;
        done();
      });
    });

    appsTests(
      () => apps.create,
      () => apps.find,
      () => apps.get
    );
  });
});
