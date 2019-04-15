const HashStubOutput = require('./HashStubOutput');
const ObjectOutput = require('./ObjectOutput');

/**
 * The ObjectOutputDetailed model module.
 * @module model/ObjectOutputDetailed
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ObjectOutputDetailed</code>.
 * The properties that are included when fetching a single Object.
 * @alias module:model/ObjectOutputDetailed
 * @class
 * @implements module:model/ObjectOutput
 * @implements module:model/HashStubOutput
 * @param appId {String} 
 * @param id {String} 
 */
var exports = function(appId, id) {
  var _this = this;

  ObjectOutput.call(_this, appId, id);
  HashStubOutput.call(_this);
};

/**
 * Constructs a <code>ObjectOutputDetailed</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ObjectOutputDetailed} obj Optional instance to populate.
 * @return {module:model/ObjectOutputDetailed} The populated <code>ObjectOutputDetailed</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ObjectOutput.constructFromObject(data, obj);
    HashStubOutput.constructFromObject(data, obj);
  }
  return obj;
}


// Implement ObjectOutput interface:
/**
 * @member {String} appId
 */
exports.prototype['appId'] = undefined;

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;

// Implement HashStubOutput interface:
/**
 * @member {Array.<module:model/HashstuboutputHashes>} hashes
 */
exports.prototype['hashes'] = undefined;

module.exports = exports;
