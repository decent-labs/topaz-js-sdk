
'use strict';

const HashStubOutput = require('./HashStubOutput');
const ProofOutput = require('./ProofOutput');

/**
 * The ProofOutputDetailed model module.
 * @module model/ProofOutputDetailed
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ProofOutputDetailed</code>.
 * The properties that are included when fetching a single Proof.
 * @alias module:model/ProofOutputDetailed
 * @class
 * @implements module:model/ProofOutput
 * @implements module:model/HashStubOutput
 * @param id {String} 
 * @param merkleRoot {String} 
 * @param ethTransaction {String} 
 * @param unixTimestamp {Number} 
 * @param appId {String} 
 */
var exports = function(id, merkleRoot, ethTransaction, unixTimestamp, appId) {
  var _this = this;

  ProofOutput.call(_this, id, merkleRoot, ethTransaction, unixTimestamp, appId);
  HashStubOutput.call(_this);
};

/**
 * Constructs a <code>ProofOutputDetailed</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ProofOutputDetailed} obj Optional instance to populate.
 * @return {module:model/ProofOutputDetailed} The populated <code>ProofOutputDetailed</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofOutput.constructFromObject(data, obj);
    HashStubOutput.constructFromObject(data, obj);
  }
  return obj;
}

// Implement ProofOutput interface:
/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;

/**
 * @member {String} merkleRoot
 */
exports.prototype['merkleRoot'] = undefined;

/**
 * @member {String} ethTransaction
 */
exports.prototype['ethTransaction'] = undefined;

/**
 * @member {Number} unixTimestamp
 */
exports.prototype['unixTimestamp'] = undefined;

/**
 * @member {String} appId
 */
exports.prototype['appId'] = undefined;

// Implement HashStubOutput interface:
/**
 * @member {Array.<module:model/HashstuboutputHashes>} hashes
 */
exports.prototype['hashes'] = undefined;

module.exports = exports;
