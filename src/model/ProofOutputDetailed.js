const ApiClient = require('../ApiClient');
const HashStubOutput = require('./HashStubOutput');
const ProofOutput = require('./ProofOutput');
const BlockchainTransaction = require('./BlockchainTransaction');

var exports = function(id, merkleRoot, unixTimestamp, appId) {
  var _this = this;

  ProofOutput.call(_this, id, merkleRoot, unixTimestamp, appId);
  HashStubOutput.call(_this);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofOutput.constructFromObject(data, obj);
    HashStubOutput.constructFromObject(data, obj);
    
    if (data.hasOwnProperty('blockchainTransactions')) {
      obj['blockchainTransactions'] = ApiClient.convertToType(data['blockchainTransactions'], [BlockchainTransaction]);
    }
  }
  return obj;
}

exports.prototype['id'] = undefined;
exports.prototype['merkleRoot'] = undefined;
exports.prototype['unixTimestamp'] = undefined;
exports.prototype['appId'] = undefined;
exports.prototype['hashes'] = undefined;
exports.prototype['blockchainTransactions'] = undefined;

module.exports = exports;
