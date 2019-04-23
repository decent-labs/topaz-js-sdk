const ApiClient = require('../ApiClient');
const HashstuboutputHashes = require('./HashstuboutputHashes');

var exports = function(hashes) {
  var _this = this;

  _this['hashes'] = hashes;
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('hashes')) {
      obj['hashes'] = ApiClient.convertToType(data['hashes'], [HashstuboutputHashes]);
    }
  }
  return obj;
}

exports.prototype['hashes'] = undefined;

module.exports = exports;
