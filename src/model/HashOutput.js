const ApiClient = require('../ApiClient');
const HashCommon = require('./HashCommon');

var exports = function(hash, id, unixTimestamp, objectId, proofId) {
  var _this = this;

  HashCommon.call(_this, hash);
  _this['id'] = id;
  _this['unixTimestamp'] = unixTimestamp;
  _this['objectId'] = objectId;
  _this['proofId'] = proofId;
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    HashCommon.constructFromObject(data, obj);
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('unixTimestamp')) {
      obj['unixTimestamp'] = ApiClient.convertToType(data['unixTimestamp'], 'Number');
    }
    if (data.hasOwnProperty('objectId')) {
      obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
    }
    if (data.hasOwnProperty('proofId')) {
      obj['proofId'] = ApiClient.convertToType(data['proofId'], 'String');
    }
  }
  return obj;
}

exports.prototype['id'] = undefined;
exports.prototype['unixTimestamp'] = undefined;
exports.prototype['objectId'] = undefined;
exports.prototype['proofId'] = undefined;
exports.prototype['hash'] = undefined;

module.exports = exports;
