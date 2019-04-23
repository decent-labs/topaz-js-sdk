const HashOutput = require('./HashOutput');

var exports = function(hash, id, unixTimestamp, objectId) {
  var _this = this;

  HashOutput.call(_this, hash, id, unixTimestamp, objectId);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    HashOutput.constructFromObject(data, obj);
  }
  return obj;
}

exports.prototype['hash'] = undefined;
exports.prototype['id'] = undefined;
exports.prototype['unixTimestamp'] = undefined;
exports.prototype['objectId'] = undefined;
exports.prototype['proofId'] = undefined;

module.exports = exports;
