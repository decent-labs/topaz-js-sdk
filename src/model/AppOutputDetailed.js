const AppOutput = require('./AppOutput');

/**
 * The AppOutputDetailed model module.
 * @module model/AppOutputDetailed
 * @version 0.1.17
 */

/**
 * Constructs a new <code>AppOutputDetailed</code>.
 * The properties that are included when fetching a single Object.
 * @alias module:model/AppOutputDetailed
 * @class
 * @implements module:model/AppOutput
 * @param id {String} 
 * @param userId {String} 
 * @param name {String} 
 * @param interval {Number} 
 */
var exports = function(id, userId, name, interval) {
  var _this = this;

  AppOutput.call(_this, name, interval, id, userId);
};

/**
 * Constructs a <code>AppOutputDetailed</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AppOutputDetailed} obj Optional instance to populate.
 * @return {module:model/AppOutputDetailed} The populated <code>AppOutputDetailed</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    AppOutput.constructFromObject(data, obj);
  }
  return obj;
}

// Implement AppOutput interface:
/**
 * @member {String} name
 */
exports.prototype['name'] = undefined;

/**
 * @member {Number} interval
 */
exports.prototype['interval'] = undefined;

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;

/**
 * @member {String} userId
 */
exports.prototype['userId'] = undefined;

module.exports = exports;
