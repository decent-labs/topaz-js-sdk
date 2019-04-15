'use strict';

const ApiClient = require('../ApiClient')

/**
 * The HashstuboutputHashes model module.
 * @module model/HashstuboutputHashes
 * @version 0.1.17
 */

/**
 * Constructs a new <code>HashstuboutputHashes</code>.
 * @alias module:model/HashstuboutputHashes
 * @class
 * @param id {String} 
 * @param hash {String} 
 */
var exports = function(id, hash) {
  var _this = this;

  _this['id'] = id;
  _this['hash'] = hash;
};

/**
 * Constructs a <code>HashstuboutputHashes</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/HashstuboutputHashes} obj Optional instance to populate.
 * @return {module:model/HashstuboutputHashes} The populated <code>HashstuboutputHashes</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('hash')) {
      obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * @member {String} hash
 */
exports.prototype['hash'] = undefined;

module.exports = exports;
