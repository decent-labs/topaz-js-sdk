const expect = require('expect.js');
const setup = require('../helpers/setup');
const TopazApi = require('../../src/topaz');

describe('ProofsApi', () => {
  const proofsTests = (find) => {
    describe('findProofs', () => {
      const expects = (data, done) => {
        expect(data).to.have.length(0);
        done();
      };
  
      it('should call findProofs successfully using promises', done => {
        find()().then(data => {
          expects(data, done)
        });
      });
  
      it('should call findProofs successfully using callbacks', done => {
        find()((_, data) => {
          expects(data, done)
        });
      });
    });
  };

  describe('legacy interface', () => {
    let proofsApi;

    beforeEach('get a fresh api instance with an app', done => {
      setup.freshInstanceLegacy().then(api => {
        proofsApi = new TopazApi.ProofsApi(api);
        done();
      });
    });

    proofsTests(
      () => proofsApi.findProofs
    );
  });

  describe('new interface', () => {
    let proofs;

    beforeEach('get a fresh api instance with an app', done => {
      setup.freshInstance().then(api => {
        proofs = api.proofs;
        done();
      });
    });

    proofsTests(
      () => proofs.find
    );
  });
});
