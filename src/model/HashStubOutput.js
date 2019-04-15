'use strict';

const ApiClient = require('../ApiClient');
const HashstuboutputHashes = require('./HashstuboutputHashes');

/**
 * The HashStubOutput model module.
 * @module model/HashStubOutput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>HashStubOutput</code>.
 * Hash stub consisting of ID and Hash value
 * @alias module:model/HashStubOutput
 * @class
 * @param hashes {Array}
 */
var exports = function(hashes) {
  var _this = this;

  _this['hashes'] = hashes;
};

/**
 * Constructs a <code>HashStubOutput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/HashStubOutput} obj Optional instance to populate.
 * @return {module:model/HashStubOutput} The populated <code>HashStubOutput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('hashes')) {
      obj['hashes'] = ApiClient.convertToType(data['hashes'], [HashstuboutputHashes]);
    }
  }
  return obj;
}

/**
 * @member {Array.<module:model/HashstuboutputHashes>} hashes
 */
exports.prototype['hashes'] = undefined;

module.exports = exports;
