const HashStubOutput = require('./HashStubOutput');
const ProofOutput = require('./ProofOutput');

var exports = function(id, merkleRoot, ethTransaction, unixTimestamp, appId) {
  var _this = this;

  ProofOutput.call(_this, id, merkleRoot, ethTransaction, unixTimestamp, appId);
  HashStubOutput.call(_this);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofOutput.constructFromObject(data, obj);
    HashStubOutput.constructFromObject(data, obj);
  }
  return obj;
}

exports.prototype['id'] = undefined;
exports.prototype['merkleRoot'] = undefined;
exports.prototype['ethTransaction'] = undefined;
exports.prototype['unixTimestamp'] = undefined;
exports.prototype['appId'] = undefined;
exports.prototype['hashes'] = undefined;

module.exports = exports;
