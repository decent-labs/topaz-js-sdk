const ProofCommon = require('./ProofCommon');

var exports = function() {
  var _this = this;

  ProofCommon.call(_this);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ProofCommon.constructFromObject(data, obj);
  }
  return obj;
}

module.exports = exports;
