const expect = require('expect.js');
const setup = require('../helpers/setup');
const multihash = require('../../src/utils/hashing');

describe('Trust', () => {
  let topaz;

  beforeEach('get a fresh api instance', (done) => {
    setup.freshInstance().then(api => {
      topaz = api;
      done();
    });
  });

  describe('without an existing object', () => {
    it('takes binarylike data and returns the data and new api object', (done) => {
      const inputData = "hello world";
      
      topaz.trust(inputData).then(response => {
        expect(response.data).to.be(inputData);
        expect(response.object).to.be.an(Object);
        expect(response.object.appId).to.be(topaz.appId);
        expect(response.object.hashes[0].hash).to.be(multihash(inputData));
        done();
      });
    });
  });
});