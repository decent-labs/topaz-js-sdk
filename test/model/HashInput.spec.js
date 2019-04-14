'use strict';

const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('HashInput', function() {
  let instance;

  beforeEach(function() {
    instance = new TopazApi.HashInput();
  });

  it('should create an instance of HashInput', function() {
    expect(instance).to.be.a(TopazApi.HashInput);
  });
});
