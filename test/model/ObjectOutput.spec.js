'use strict';

const expect = require('expect.js');
const uuidv4 = require('uuid/v4');
const TopazApi = require('../../src/index');

describe('ObjectOutput', function() {
  let instance, appId, objectId;

  beforeEach(function() {
    appId = uuidv4();
    objectId = uuidv4();
    instance = new TopazApi.ObjectOutput(appId, objectId);
  });

  it('should create an instance of ObjectOutput', function() {
    expect(instance).to.be.a(TopazApi.ObjectOutput);
  });

  it('should have the property appId (base name: "appId")', function() {
    expect(instance.appId).to.be(appId);
  });

  it('should have the property id (base name: "id")', function() {
    expect(instance.id).to.be(objectId);
  });
});
