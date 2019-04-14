'use strict';

const expect = require('expect.js');

const TopazApi = require('../../src/index');
const setup = require('../helpers/setup');

describe('AppsApi', function() {
  let appsApi;

  beforeEach('get a fresh api instance', function(done) {
    setup.freshInstance().then(api => {
      appsApi = new TopazApi.AppsApi(api);
      done();
    });
  });

  describe('createApp', function() {
    const params = { name: 'my first app', interval: 3600 };

    const expects = (params, data, response, done) => {
      expect(data.name).to.be(params.name);
      expect(data.interval).to.be(params.interval);
      expect(response.statusCode).to.be(201);
      done();
    };

    it('should call createApp successfully using promises', function(done) {  
      appsApi.createApp(params).then(({ data, response }) => {
        expects(params, data, response, done);
      });
    });

    it('should call createApp successfully using callbacks', function(done) {
      appsApi.createApp(params, (_, data, response) => {
        expects(params, data, response, done);
      });
    });
  });

  describe('findApps', function() {
    const expects = (data, response, done) => {
      expect(data).to.have.length(2);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call findApps successfully using promises', function(done) {
      appsApi.createApp({ name: 'a', interval: 30 })
      .then(() => appsApi.createApp({ name: 'b', interval: 30 }))
      .then(() => appsApi.findApps())
      .then(({ data, response }) => {
        expects(data, response, done)
      });
    });

    it('should call findApps successfully using callbacks', function(done) {
      appsApi.createApp({ name: 'a', interval: 30 }, () => {
        appsApi.createApp({ name: 'b', interval: 30 }, () => {
          appsApi.findApps((_, data, response) => {
            expects(data, response, done)
          });
        });
      });
    });
  });

  describe('getApp', function() {
    const expects = (appId, data, response, done) => {
      expect(data.id).to.be(appId);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call getApp successfully using promises', function(done) {
      appsApi.createApp({ name: 'other app', interval: 3600 })
      .then(({ data, _ }) => Promise.all([appsApi.getApp(data.id), data.id]))
      .then(([{ data, response }, appId]) => {
        expects(appId, data, response, done)
      });
    });

    it('should call getApp successfully using callbacks', function(done) {
      appsApi.createApp({ name: 'other app', interval: 3600 }, (_, createData, __) => {
        appsApi.getApp(createData.id, (_, getData, getResponse) => {
          expects(createData.id, getData, getResponse, done);
        });
      });
    });
  });
});
