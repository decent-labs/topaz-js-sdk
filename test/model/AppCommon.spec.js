/**
 * Topaz API
 * ## Topaz API Spec  To get up and running with Topaz API as quickly as possible, read through these docs.  ### Prerequisites  Create an account at [https://topaz.io](https://topaz.io), log in, and generate an API Token.  You'll need an API Token to create a new app, create objects, create hashes, and view proofs.  All API requests should be prefixed with `/v1`, indicating that you're targeting version 1 of our API.  ### Guarantee  Topaz API follows Semantic Versioning (https://semver.org), so expect that any breaking changes will be versioned under a new route prefix.
 *
 * OpenAPI spec version: 0.1.17
 * Contact: hello@topaz.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

'use strict';

const expect = require('expect.js');
const TopazApi = require('../../src/index');

describe('AppCommon', function() {
  var instance;

  beforeEach(function() {
    instance = new TopazApi.AppCommon("test app", 30);
  });

  it('should create an instance of AppCommon', function() {
    expect(instance).to.be.a(TopazApi.AppCommon);
  });

  it('should have the property name (base name: "name")', function() {
    expect(instance.name).to.be("test app");
  });

  it('should have the property interval (base name: "interval")', function() {
    expect(instance.interval).to.be(30);
  });
});
