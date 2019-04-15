const ProofCommon = require('./ProofCommon');

/**
 * The ProofInput model module.
 * @module model/ProofInput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ProofInput</code>.
 * The properties that are allowed when creating or updating a Proof.
 * @alias module:model/ProofInput
 * @class
 * @implements module:model/ProofCommon
 */
var exports = function() {
  var _this = this;

  ProofCommon.call(_this);
};

/**
 * Constructs a <code>ProofInput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ProofInput} obj Optional instance to populate.
 * @return {module:model/ProofInput} The populated <code>ProofInput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofCommon.constructFromObject(data, obj);
  }
  return obj;
}

module.exports = exports;
