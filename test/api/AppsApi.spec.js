'use strict';

const expect = require('expect.js');

const TopazApi = require('../../src/index');
const setup = require('../helpers/setup');

describe('AppsApi', function() {
  let instance;

  beforeEach('get a fresh api instance', function() {
    return setup.freshInstance().then(instance = new TopazApi.AppsApi())
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
      instance.createApp(params).then(({ data, response }) => {
        expects(params, data, response, done);
      });
    });

    it('should call createApp successfully using callbacks', function(done) {
      instance.createApp(params, (_, data, response) => {
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
      instance.createApp({ name: 'a', interval: 30 })
      .then(() => instance.createApp({ name: 'b', interval: 30 }))
      .then(() => instance.findApps())
      .then(({ data, response }) => {
        expects(data, response, done)
      });
    });

    it('should call findApps successfully using callbacks', function(done) {
      instance.createApp({ name: 'a', interval: 30 }, () => {
        instance.createApp({ name: 'b', interval: 30 }, () => {
          instance.findApps((_, data, response) => {
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
      instance.createApp({ name: 'other app', interval: 3600 })
      .then(({ data, _ }) => Promise.all([instance.getApp(data.id), data.id]))
      .then(([{ data, response }, appId]) => {
        expects(appId, data, response, done)
      });
    });

    it('should call getApp successfully using callbacks', function(done) {
      instance.createApp({ name: 'other app', interval: 3600 }, (_, createData, __) => {
        instance.getApp(createData.id, (_, getData, getResponse) => {
          expects(createData.id, getData, getResponse, done);
        });
      });
    });
  });
});
