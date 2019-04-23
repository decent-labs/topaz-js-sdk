const expect = require('expect.js');
const uuidv4 = require('uuid/v4');
const random = require('../helpers/random');
const TopazApi = require('../../src/topaz');

describe('HashstuboutputHashes', function() {
  let instance, hash, hashId;

  beforeEach(function() {
    hash = random.sha256Base58Multihash();
    hashId = uuidv4();
    instance = new TopazApi.HashstuboutputHashes(hashId, hash);
  });

  it('should create an instance of HashstuboutputHashes', function() {
    expect(instance).to.be.a(TopazApi.HashstuboutputHashes);
  });

  it('should have the property id (base name: "id")', function() {
    expect(instance.id).to.be(hashId);
  });

  it('should have the property hash (base name: "hash")', function() {
    expect(instance.hash).to.be(hash);
  });
});
