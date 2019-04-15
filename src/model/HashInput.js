const HashCommon = require('./HashCommon');

/**
  * The HashInput model module.
  * @module model/HashInput
  * @version 0.1.17
  */

/**
  * Constructs a new <code>HashInput</code>.
  * The properties that are allowed when creating or updating a Hash.
  * @alias module:model/HashInput
  * @class
  * @implements module:model/HashCommon
  * @param hash {String} 
  */
var exports = function(hash) {
  var _this = this;

  HashCommon.call(_this, hash);
};

/**
  * Constructs a <code>HashInput</code> from a plain JavaScript object, optionally creating a new instance.
  * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
  * @param {Object} data The plain JavaScript object bearing properties of interest.
  * @param {module:model/HashInput} obj Optional instance to populate.
  * @return {module:model/HashInput} The populated <code>HashInput</code> instance.
  */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    HashCommon.constructFromObject(data, obj);
  }
  return obj;
}

// Implement HashCommon interface:
/**
  * @member {String} hash
  */
exports.prototype['hash'] = undefined;

module.exports = exports;
