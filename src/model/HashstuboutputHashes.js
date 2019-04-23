const ApiClient = require('../ApiClient')

var exports = function(id, hash) {
  var _this = this;

  _this['id'] = id;
  _this['hash'] = hash;
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('id')) {
      obj['id'] = ApiClient.convertToType(data['id'], 'String');
    }
    if (data.hasOwnProperty('hash')) {
      obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
    }
  }
  return obj;
}

exports.prototype['id'] = undefined;
exports.prototype['hash'] = undefined;

module.exports = exports;
