const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/topaz');

describe('ProofsApi', () => {
  const proofsTests = (appId, find) => {
    describe('findProofs', () => {
      const expects = (data, response, done) => {
        expect(data).to.have.length(0);
        expect(response.statusCode).to.be(200);
        done();
      };
  
      it('should call findProofs successfully using promises', (done) => {
        find()(appId())
        .then(({ data, response }) => {
          expects(data, response, done)
        });
      });
  
      it('should call findProofs successfully using callbacks', (done) => {
        find()(appId(), (_, data, response) => {
          expects(data, response, done)
        });
      });
    });
  };

  describe('legacy interface', () => {
    let proofsApi;
    let appId;

    beforeEach('get a fresh api instance with an app', (done) => {
      setup.freshInstanceLegacy().then(api => {
        appId = api.appId;
        proofsApi = new TopazApi.ProofsApi(api);
        done();
      });
    });

    proofsTests(
      () => appId,
      () => proofsApi.findProofs
    );
  });

  describe('new interface', () => {
    let proofs;
    let appId;

    beforeEach('get a fresh api instance with an app', (done) => {
      setup.freshInstance().then(api => {
        appId = api.appId;
        proofs = api.proofs;
        done();
      });
    });

    proofsTests(
      () => appId,
      () => proofs.find
    );
  });
});
