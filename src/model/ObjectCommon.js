/**
 * The ObjectCommon model module.
 * @module model/ObjectCommon
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ObjectCommon</code>.
 * The properties that are shared amongst all versions of the Object model.
 * @alias module:model/ObjectCommon
 * @class
 */
var exports = function() {};

/**
 * Constructs a <code>ObjectCommon</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ObjectCommon} obj Optional instance to populate.
 * @return {module:model/ObjectCommon} The populated <code>ObjectCommon</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();
  }
  return obj;
}

module.exports = exports;
