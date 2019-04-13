'use strict';

const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('AppOutputDetailed', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.AppOutputDetailed();
  });

  it('should create an instance of AppOutputDetailed', function() {
    expect(instance).to.be.a(TopazApi.AppOutputDetailed);
  });
});
