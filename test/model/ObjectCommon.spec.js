const expect = require('expect.js');
const TopazApi = require('../../src/topaz');

describe('ObjectCommon', function() {
  let instance;

  beforeEach(function() {
    instance = new TopazApi.ObjectCommon();
  });

  it('should create an instance of ObjectCommon', function() {
    expect(instance).to.be.a(TopazApi.ObjectCommon);
  });
});
