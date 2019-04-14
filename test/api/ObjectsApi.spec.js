'use strict';

const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/index');

describe('ObjectsApi', function () {
  let objectsApi;
  let appId;

  beforeEach('get a fresh api instance with an app', function (done) {
    setup.freshInstance().then(api => {
      const appsApi = new TopazApi.AppsApi(api);
      return Promise.all([appsApi.createApp({ name: 'test', interval: 3600 }), api]);
    }).then(([{ data }, api]) => {
      appId = data.id;
      objectsApi = new TopazApi.ObjectsApi(api, appId);
      done();
    });
  });

  describe('createObject', function () {
    const expects = (data, response, done) => {
      expect(data.appId).to.be(appId);
      expect(response.statusCode).to.be(201);
      done();
    };

    it('should call createObject successfully using promises', function(done) {  
      objectsApi.createObject().then(({ data, response }) => {
        expects(data, response, done);
      });
    });

    it('should call createObject successfully using callbacks', function(done) {
      objectsApi.createObject((_, data, response) => {
        expects(data, response, done);
      });
    });
  });

  describe('findObjects', function () {
    const expects = (data, response, done) => {
      expect(data).to.have.length(2);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call findObjects successfully using promises', function(done) {
      objectsApi.createObject()
      .then(() => objectsApi.createObject())
      .then(() => objectsApi.findObjects())
      .then(({ data, response }) => {
        expects(data, response, done)
      });
    });

    it('should call findObjects successfully using callbacks', function(done) {
      objectsApi.createObject(() => {
        objectsApi.createObject(() => {
          objectsApi.findObjects((_, data, response) => {
            expects(data, response, done)
          });
        });
      });
    });
  });

  describe('getObject', function () {
    const expects = (objectId, data, response, done) => {
      expect(data.id).to.be(objectId);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call getObject successfully using promises', function(done) {
      objectsApi.createObject()
      .then(({ data, _ }) => Promise.all([objectsApi.getObject(data.id), data.id]))
      .then(([{ data, response }, objectId]) => {
        expects(objectId, data, response, done)
      });
    });

    it('should call getObject successfully using callbacks', function(done) {
      objectsApi.createObject((_, createData, __) => {
        objectsApi.getObject(createData.id, (_, getData, getResponse) => {
          expects(createData.id, getData, getResponse, done);
        });
      });
    });
  });
});
