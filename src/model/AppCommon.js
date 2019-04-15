const ApiClient = require('../ApiClient');

/**
 * The AppCommon model module.
 * @module model/AppCommon
 * @version 0.1.17
 */

/**
 * Constructs a new <code>AppCommon</code>.
 * The properties that are shared amongst all versions of the App model.
 * @alias module:model/AppCommon
 * @class
 * @param name {String} 
 * @param interval {Number} 
 */
var exports = function(name, interval) {
  var _this = this;

  _this['name'] = name;
  _this['interval'] = interval;
};

/**
 * Constructs a <code>AppCommon</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AppCommon} obj Optional instance to populate.
 * @return {module:model/AppCommon} The populated <code>AppCommon</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('name')) {
      obj['name'] = ApiClient.convertToType(data['name'], 'String');
    }
    if (data.hasOwnProperty('interval')) {
      obj['interval'] = ApiClient.convertToType(data['interval'], 'Number');
    }
  }
  return obj;
}

/**
 * @member {String} name
 */
exports.prototype['name'] = undefined;
/**
 * @member {Number} interval
 */
exports.prototype['interval'] = undefined;

module.exports = exports;
