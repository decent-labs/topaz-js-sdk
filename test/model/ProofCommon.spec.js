const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('ProofCommon', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.ProofCommon();
  });

  it('should create an instance of ProofCommon', function() {
    expect(instance).to.be.a(TopazApi.ProofCommon);
  });
});
