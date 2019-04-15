const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/index');

describe.only('ProofsApi', function() {
  let proofsApi;

  beforeEach('get a fresh api instance with an app', function (done) {
    setup.freshInstance().then(api => {
      const appsApi = new TopazApi.AppsApi(api);
      return Promise.all([appsApi.createApp({ name: 'test', interval: 3600 }), api]);
    }).then(([{ data }, api]) => {
      proofsApi = new TopazApi.ProofsApi(api, data.id);
      done();
    });
  });

  describe('findProofs', function () {
    const expects = (data, response, done) => {
      expect(data).to.have.length(0);
      expect(response.statusCode).to.be(200);
      done();
    };

    it('should call findProofs successfully using promises', function(done) {
      proofsApi.findProofs()
      .then(({ data, response }) => {
        expects(data, response, done)
      });
    });

    it('should call findProofs successfully using callbacks', function(done) {
      proofsApi.findProofs((_, data, response) => {
        expects(data, response, done)
      });
    });
  });
});
