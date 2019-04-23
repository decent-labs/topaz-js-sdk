const ApiClient = require('../ApiClient');
const ProofCommon = require('./ProofCommon');

var exports = function(id, merkleRoot, ethTransaction, unixTimestamp, appId) {
  var _this = this;

  ProofCommon.call(_this);
  _this['id'] = id;
  _this['merkleRoot'] = merkleRoot;
  _this['ethTransaction'] = ethTransaction;
  _this['unixTimestamp'] = unixTimestamp;
  _this['appId'] = appId;
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofCommon.constructFromObject(data, obj);
    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('merkleRoot')) {
      obj['merkleRoot'] = ApiClient.convertToType(data['merkleRoot'], 'String');
    }
    if (data.hasOwnProperty('ethTransaction')) {
      obj['ethTransaction'] = ApiClient.convertToType(data['ethTransaction'], 'String');
    }
    if (data.hasOwnProperty('unixTimestamp')) {
      obj['unixTimestamp'] = ApiClient.convertToType(data['unixTimestamp'], 'Number');
    }
    if (data.hasOwnProperty('appId')) {
      obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
    }
  }
  return obj;
}

exports.prototype['id'] = undefined;
exports.prototype['merkleRoot'] = undefined;
exports.prototype['ethTransaction'] = undefined;
exports.prototype['unixTimestamp'] = undefined;
exports.prototype['appId'] = undefined;

module.exports = exports;
