const ApiClient = require('../ApiClient');

var exports = function(hash) {
  var _this = this;

  _this['hash'] = hash;
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('hash')) {
      obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
    }
  }
  return obj;
}

exports.prototype['hash'] = undefined;

module.exports = exports;
