const ApiClient = require('../ApiClient');
const ObjectCommon = require('./ObjectCommon');

var exports = function(appId, id) {
  var _this = this;

  ObjectCommon.call(_this);
  _this['appId'] = appId;
  _this['id'] = id;
};

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

exports.prototype['appId'] = undefined;
exports.prototype['id'] = undefined;

module.exports = exports;
