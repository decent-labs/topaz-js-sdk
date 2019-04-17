const expect = require('expect.js');
const TopazApi = require('../../src/topaz');

describe('AppInput', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.AppInput();
  });

  it('should create an instance of AppInput', function() {
    expect(instance).to.be.a(TopazApi.AppInput);
  });
});
