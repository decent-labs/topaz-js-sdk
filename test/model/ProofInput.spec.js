const expect = require('expect.js');
const TopazApi = require('../../src/topaz');

describe('ProofInput', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.ProofInput();
  });

  it('should create an instance of ProofInput', function() {
    expect(instance).to.be.a(TopazApi.ProofInput);
  });
});
