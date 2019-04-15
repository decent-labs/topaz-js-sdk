const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('ProofOutputDetailed', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.ProofOutputDetailed();
  });

  it('should create an instance of ProofOutputDetailed', function() {
    expect(instance).to.be.a(TopazApi.ProofOutputDetailed);
  });
});
