const ApiClient = require('../ApiClient');

var exports = function(blockchainNetwork, transactionHash, explorers) {
  var _this = this;

  _this['blockchainNetwork'] = blockchainNetwork;
  _this['transactionHash'] = transactionHash;
  _this['explorers'] = explorers;
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    if (data.hasOwnProperty('blockchainNetwork')) {
      obj['blockchainNetwork'] = ApiClient.convertToType(data['blockchainNetwork'], 'String');
    }
    if (data.hasOwnProperty('transactionHash')) {
      obj['transactionHash'] = ApiClient.convertToType(data['transactionHash'], 'String');
    }
    if (data.hasOwnProperty('explorers')) {
      obj['explorers'] = ApiClient.convertToType(data['explorers'], ['String']);
    }
  }
  return obj;
}

exports.prototype['blockchainNetwork'] = undefined;
exports.prototype['transactionHash'] = undefined;
exports.prototype['explorers'] = undefined;

module.exports = exports;
