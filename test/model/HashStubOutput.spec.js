const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('HashStubOutput', function() {
  let instance, hashes;

  beforeEach(function() {
    hashes = [];
    instance = new TopazApi.HashStubOutput(hashes);
  });

  it('should create an instance of HashStubOutput', function() {
    expect(instance).to.be.a(TopazApi.HashStubOutput);
  });

  it('should have the property hashes (base name: "hashes")', function() {
    expect(instance.hashes).to.be(hashes);
  });
});
