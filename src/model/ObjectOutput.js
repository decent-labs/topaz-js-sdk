const ApiClient = require('../ApiClient');
const ObjectCommon = require('./ObjectCommon');

/**
 * The ObjectOutput model module.
 * @module model/ObjectOutput
 * @version 0.1.17
 */

/**
 * Constructs a new <code>ObjectOutput</code>.
 * The properties that are included when fetching a list of Objects.
 * @alias module:model/ObjectOutput
 * @class
 * @implements module:model/ObjectCommon
 * @param appId {String} 
 * @param id {String} 
 */
var exports = function(appId, id) {
  var _this = this;

  ObjectCommon.call(_this);
  _this['appId'] = appId;
  _this['id'] = id;
};

/**
 * Constructs a <code>ObjectOutput</code> from a plain JavaScript object, optionally creating a new instance.
 * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
 * @param {Object} data The plain JavaScript object bearing properties of interest.
 * @param {module:model/ObjectOutput} obj Optional instance to populate.
 * @return {module:model/ObjectOutput} The populated <code>ObjectOutput</code> instance.
 */
exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ObjectCommon.constructFromObject(data, obj);
    if (data.hasOwnProperty('appId')) {
      obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
    }
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
  }
  return obj;
}

/**
 * @member {String} appId
 */
exports.prototype['appId'] = undefined;
/**
 * @member {String} id
 */
exports.prototype['id'] = undefined;

module.exports = exports;
