'use strict';

const ApiClient = require('../ApiClient');

/**
 * The HashCommon model module.
 * @module model/HashCommon
 * @version 0.1.17
 */

/**
 * Constructs a new <code>HashCommon</code>.
 * The properties that are shared amongst all versions of the Hash model.
 * @alias module:model/HashCommon
 * @class
 * @param hash {String} 
 */
var exports = function(hash) {
  var _this = this;

  _this['hash'] = hash;
};

/**
 * Constructs a <code>HashCommon</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/HashCommon} obj Optional instance to populate.
 * @return {module:model/HashCommon} The populated <code>HashCommon</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('hash')) {
      obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} hash
 */
exports.prototype['hash'] = undefined;

module.exports = exports;
