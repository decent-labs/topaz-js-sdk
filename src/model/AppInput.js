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

const AppCommon = require('./AppCommon');


/**
 * The AppInput model module.
 * @module model/AppInput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>AppInput</code>.
 * The properties that are allowed when creating or updating an App.
 * @alias module:model/AppInput
 * @class
 * @implements module:model/AppCommon
 * @param name {String} 
 * @param interval {Number} 
 */
var exports = function(name, interval) {
  var _this = this;

  AppCommon.call(_this, name, interval);
};

/**
 * Constructs a <code>AppInput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AppInput} obj Optional instance to populate.
 * @return {module:model/AppInput} The populated <code>AppInput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    AppCommon.constructFromObject(data, obj);
  }
  return obj;
}


// Implement AppCommon interface:
/**
 * @member {String} name
 */
exports.prototype['name'] = undefined;

/**
 * @member {Number} interval
 */
exports.prototype['interval'] = undefined;


module.exports = exports;
