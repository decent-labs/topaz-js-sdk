const AppCommon = require('./AppCommon');

/**
 * The AppInput model module.
 * @module model/AppInput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>AppInput</code>.
 * The properties that are allowed when creating or updating an App.
 * @alias module:model/AppInput
 * @class
 * @implements module:model/AppCommon
 * @param name {String} 
 * @param interval {Number} 
 */
var exports = function(name, interval) {
  var _this = this;

  AppCommon.call(_this, name, interval);
};

/**
 * Constructs a <code>AppInput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AppInput} obj Optional instance to populate.
 * @return {module:model/AppInput} The populated <code>AppInput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    AppCommon.constructFromObject(data, obj);
  }
  return obj;
}

// Implement AppCommon interface:
/**
 * @member {String} name
 */
exports.prototype['name'] = undefined;

/**
 * @member {Number} interval
 */
exports.prototype['interval'] = undefined;

module.exports = exports;
