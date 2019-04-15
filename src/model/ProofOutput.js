const ApiClient = require('../ApiClient');
const ProofCommon = require('./ProofCommon');

/**
 * The ProofOutput model module.
 * @module model/ProofOutput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ProofOutput</code>.
 * The properties that are included when fetching a list of Proof.
 * @alias module:model/ProofOutput
 * @class
 * @implements module:model/ProofCommon
 * @param id {String} 
 * @param merkleRoot {String} 
 * @param ethTransaction {String} 
 * @param unixTimestamp {Number} 
 * @param appId {String} 
 */
var exports = function(id, merkleRoot, ethTransaction, unixTimestamp, appId) {
  var _this = this;

  ProofCommon.call(_this);
  _this['id'] = id;
  _this['merkleRoot'] = merkleRoot;
  _this['ethTransaction'] = ethTransaction;
  _this['unixTimestamp'] = unixTimestamp;
  _this['appId'] = appId;
};

/**
 * Constructs a <code>ProofOutput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ProofOutput} obj Optional instance to populate.
 * @return {module:model/ProofOutput} The populated <code>ProofOutput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofCommon.constructFromObject(data, obj);
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('merkleRoot')) {
      obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
    }
    if (data.hasOwnProperty('ethTransaction')) {
      obj['ethTransaction'] = ApiClient.convertToType(data['ethTransaction'], 'String');
    }
    if (data.hasOwnProperty('unixTimestamp')) {
      obj['unixTimestamp'] = ApiClient.convertToType(data['unixTimestamp'], 'Number');
    }
    if (data.hasOwnProperty('appId')) {
      obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
    }
  }
  return obj;
}

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

module.exports = exports;
