const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('HashOutputDetailed', function() {
  let instance;

  beforeEach(function() {
    instance = new TopazApi.HashOutputDetailed();
  });

  it('should create an instance of HashOutputDetailed', function() {
    expect(instance).to.be.a(TopazApi.HashOutputDetailed);
  });
});
