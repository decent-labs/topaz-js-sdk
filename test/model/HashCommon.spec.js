'use strict';

const expect = require('expect.js');
const random = require('../helpers/random');
const TopazApi = require('../../src/index');

describe('HashCommon', function() {
  let instance, hash;

  beforeEach(function() {
    hash = random.sha256Base58Multihash();
    instance = new TopazApi.HashCommon(hash);
  });

  it('should create an instance of HashCommon', function() {
    expect(instance).to.be.a(TopazApi.HashCommon);
  });

  it('should have the property hash (base name: "hash")', function() {
    expect(instance.hash).to.be(hash);
  });
});
