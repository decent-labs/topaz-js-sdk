  /**
   * The ProofCommon model module.
   * @module model/ProofCommon
   * @version 0.1.17
   */

  /**
   * Constructs a new <code>ProofCommon</code>.
   * The properties that are shared amongst all versions of the Proof model.
   * @alias module:model/ProofCommon
   * @class
   */
  var exports = function() {};

  /**
   * Constructs a <code>ProofCommon</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProofCommon} obj Optional instance to populate.
   * @return {module:model/ProofCommon} The populated <code>ProofCommon</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
    }
    return obj;
  }

  module.exports = exports;
