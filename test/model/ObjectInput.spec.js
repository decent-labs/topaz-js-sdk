const expect = require('expect.js');
const TopazApi = require('../../src/topaz');

describe('ObjectInput', function() {
  let instance;

  beforeEach(function() {
    instance = new TopazApi.ObjectInput();
  });

  it('should create an instance of ObjectInput', function() {
    expect(instance).to.be.a(TopazApi.ObjectInput);
  });
});
