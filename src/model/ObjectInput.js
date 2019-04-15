const ObjectCommon = require('./ObjectCommon');

/**
 * The ObjectInput model module.
 * @module model/ObjectInput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ObjectInput</code>.
 * The properties that are allowed when creating or updating a Object.
 * @alias module:model/ObjectInput
 * @class
 * @implements module:model/ObjectCommon
 */
var exports = function() {
  var _this = this;

  ObjectCommon.call(_this);
};

/**
 * Constructs a <code>ObjectInput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ObjectInput} obj Optional instance to populate.
 * @return {module:model/ObjectInput} The populated <code>ObjectInput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ObjectCommon.constructFromObject(data, obj);
  }
  return obj;
}

module.exports = exports;
