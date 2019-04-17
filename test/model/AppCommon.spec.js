const expect = require('expect.js');
const TopazApi = require('../../src/topaz');

describe('AppCommon', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.AppCommon("test app", 30);
  });

  it('should create an instance of AppCommon', function() {
    expect(instance).to.be.a(TopazApi.AppCommon);
  });

  it('should have the property name (base name: "name")', function() {
    expect(instance.name).to.be("test app");
  });

  it('should have the property interval (base name: "interval")', function() {
    expect(instance.interval).to.be(30);
  });
});
