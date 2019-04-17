const expect = require('expect.js');
const uuidv4 = require('uuid/v4');
const random = require('../helpers/random');
const TopazApi = require('../../src/topaz');

describe('ProofOutput', function() {
  var instance, proofId, merkleRoot, ethTransaction, unixTimestamp, appId;

  beforeEach(function() {
    proofId = uuidv4();
    merkleRoot = random.sha256Base58Multihash();
    ethTransaction = '0x' + random.sha256HexHash();
    unixTimestamp = Date.now();
    appId = uuidv4();

    instance = new TopazApi.ProofOutput(proofId, merkleRoot, ethTransaction, unixTimestamp, appId);
  });

  it('should create an instance of ProofOutput', function() {
    expect(instance).to.be.a(TopazApi.ProofOutput);
  });

  it('should have the property id (base name: "id")', function() {
    expect(instance.id).to.be(proofId);
  });

  it('should have the property merkleRoot (base name: "merkleRoot")', function() {
    expect(instance.merkleRoot).to.be(merkleRoot);
  });

  it('should have the property ethTransaction (base name: "ethTransaction")', function() {
    expect(instance.ethTransaction).to.be(ethTransaction);
  });

  it('should have the property unixTimestamp (base name: "unixTimestamp")', function() {
    expect(instance.unixTimestamp).to.be(unixTimestamp);
  });

  it('should have the property appId (base name: "appId")', function() {
    expect(instance.appId).to.be(appId);
  });
});
