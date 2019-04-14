'use strict';

const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('ObjectOutputDetailed', function() {
  let instance;

  beforeEach(function() {
    instance = new TopazApi.ObjectOutputDetailed();
  });

  it('should create an instance of ObjectOutputDetailed', function() {
    expect(instance).to.be.a(TopazApi.ObjectOutputDetailed);
  });
});
