'use strict';

const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('AppInput', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.AppInput();
  });

  it('should create an instance of AppInput', function() {
    expect(instance).to.be.a(TopazApi.AppInput);
  });
});
