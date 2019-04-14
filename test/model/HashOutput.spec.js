'use strict';

const expect = require('expect.js');
const uuidv4 = require('uuid/v4');
const random = require('../helpers/random');
const TopazApi = require('../../src/index');

describe('HashOutput', function() {
  let instance, hash, hashId, objectId, proofId, unixTimestamp;

  beforeEach(function() {
    hash = random.sha256HexHash();
    hashId = uuidv4();
    unixTimestamp = Date.now()
    objectId = uuidv4();
    proofId = uuidv4();
    instance = new TopazApi.HashOutput(hash, hashId, unixTimestamp, objectId, proofId);
  });

  it('should create an instance of HashOutput', function() {
    expect(instance).to.be.a(TopazApi.HashOutput);
  });

  it('should have the property id (base name: "id")', function() {
    expect(instance.id).to.be(hashId);
  });

  it('should have the property unixTimestamp (base name: "unixTimestamp")', function() {
    expect(instance.unixTimestamp).to.be(unixTimestamp);
  });

  it('should have the property objectId (base name: "objectId")', function() {
    expect(instance.objectId).to.be(objectId);
  });

  it('should have the property proofId (base name: "proofId")', function() {
    expect(instance.proofId).to.be(proofId);
  });
});
