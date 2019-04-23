const HashCommon = require('./HashCommon');

var exports = function(hash) {
  var _this = this;

  HashCommon.call(_this, hash);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    HashCommon.constructFromObject(data, obj);
  }
  return obj;
}

exports.prototype['hash'] = undefined;

module.exports = exports;
