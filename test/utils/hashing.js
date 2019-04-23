const expect = require('expect.js');
const setup = require('../helpers/setup');

describe.only('Multihashing', () => {
  let topaz;

  beforeEach('get a fresh api instance', done => {
    setup.freshInstance().then(api => {
      topaz = api;
      done();
    });
  });

  describe('create a hash', () => {
    const data = 'my valuable data';
    const hash = 'QmRNRBDUT6MvSnA7pRHM7yPT8HMdzEzNHjs57TKNtQo8jQ';
    
    it('makes a hash', done => {
      expect(topaz.utils.hash(data)).to.be(hash);
      done();
    });

    it('makes the same hash', done => {
      expect(topaz.utils.hash(data)).to.be(hash);
      done();
    });

    it('makes a different hash', done => {
      expect(topaz.utils.hash(data + ' moar')).to.not.be(hash);
      done();
    });
  });
});
