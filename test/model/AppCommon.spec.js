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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TopazApi);
  }
}(this, function(expect, TopazApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TopazApi.AppCommon("test app", 30);
  });

  describe('AppCommon', function() {
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
}));
