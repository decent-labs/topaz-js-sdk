const expect = require('expect.js');
const uuidv4 = require('uuid/v4');
const TopazApi = require('../../src/topaz');

describe('AppOutput', function() {
  var instance, appId, userId;

  beforeEach(function() {
    appId = uuidv4();
    userId = uuidv4();
    instance = new TopazApi.AppOutput("test app", 30, appId, userId)
  });

  it('should create an instance of AppOutput', function() {
    expect(instance).to.be.a(TopazApi.AppOutput);
  });

  it('should have the property id (base name: "id")', function() {
    expect(instance.id).to.be(appId);
  });

  it('should have the property userId (base name: "userId")', function() {
    expect(instance.userId).to.be(userId);
  });
});
