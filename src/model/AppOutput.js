const ApiClient = require('../ApiClient');
const AppCommon = require('./AppCommon');

/**
 * The AppOutput model module.
 * @module model/AppOutput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>AppOutput</code>.
 * The properties that are included when fetching a list of Apps.
 * @alias module:model/AppOutput
 * @class
 * @implements module:model/AppCommon
 * @param name {String} 
 * @param interval {Number} 
 * @param id {String} 
 * @param userId {String} 
 */
var exports = function(name, interval, id, userId) {
  var _this = this;

  AppCommon.call(_this, name, interval);
  _this['id'] = id;
  _this['userId'] = userId;
};

/**
 * Constructs a <code>AppOutput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/AppOutput} obj Optional instance to populate.
 * @return {module:model/AppOutput} The populated <code>AppOutput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    AppCommon.constructFromObject(data, obj);
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('userId')) {
      obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;
/**
 * @member {String} userId
 */
exports.prototype['userId'] = undefined;

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
