const HashOutput = require('./HashOutput');

/**
 * The HashOutputDetailed model module.
 * @module model/HashOutputDetailed
 * @version 0.1.17
 */

/**
 * Constructs a new <code>HashOutputDetailed</code>.
 * The properties that are included when fetching a single Hash.
 * @alias module:model/HashOutputDetailed
 * @class
 * @implements module:model/HashOutput
 * @param hash {String} 
 * @param id {String} 
 * @param unixTimestamp {Number} 
 * @param objectId {String} 
 */
var exports = function(hash, id, unixTimestamp, objectId) {
  var _this = this;

  HashOutput.call(_this, hash, id, unixTimestamp, objectId);
};

/**
 * Constructs a <code>HashOutputDetailed</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/HashOutputDetailed} obj Optional instance to populate.
 * @return {module:model/HashOutputDetailed} The populated <code>HashOutputDetailed</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    HashOutput.constructFromObject(data, obj);
  }
  return obj;
}

// Implement HashOutput interface:
/**
 * @member {String} hash
 */
exports.prototype['hash'] = undefined;

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

module.exports = exports;
