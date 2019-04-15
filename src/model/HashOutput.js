const ApiClient = require('../ApiClient');
const HashCommon = require('./HashCommon');

/**
 * The HashOutput model module.
 * @module model/HashOutput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>HashOutput</code>.
 * The properties that are included when fetching a list of Hashes.
 * @alias module:model/HashOutput
 * @class
 * @implements module:model/HashCommon
 * @param hash {String} 
 * @param id {String} 
 * @param unixTimestamp {Number} 
 * @param objectId {String} 
 * @param proofId {String}
 */
var exports = function(hash, id, unixTimestamp, objectId, proofId) {
  var _this = this;

  HashCommon.call(_this, hash);
  _this['id'] = id;
  _this['unixTimestamp'] = unixTimestamp;
  _this['objectId'] = objectId;
  _this['proofId'] = proofId;
};

/**
 * Constructs a <code>HashOutput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/HashOutput} obj Optional instance to populate.
 * @return {module:model/HashOutput} The populated <code>HashOutput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    HashCommon.constructFromObject(data, obj);
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('unixTimestamp')) {
      obj['unixTimestamp'] = ApiClient.convertToType(data['unixTimestamp'], 'Number');
    }
    if (data.hasOwnProperty('objectId')) {
      obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
    }
    if (data.hasOwnProperty('proofId')) {
      obj['proofId'] = ApiClient.convertToType(data['proofId'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * @member {Number} unixTimestamp
 */
exports.prototype['unixTimestamp'] = undefined;
/**
 * @member {String} objectId
 */
exports.prototype['objectId'] = undefined;
/**
 * @member {String} proofId
 */
exports.prototype['proofId'] = undefined;

// Implement HashCommon interface:
/**
 * @member {String} hash
 */
exports.prototype['hash'] = undefined;

module.exports = exports;
