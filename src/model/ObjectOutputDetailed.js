const HashStubOutput = require('./HashStubOutput');
const ObjectOutput = require('./ObjectOutput');

var exports = function(appId, id) {
  var _this = this;

  ObjectOutput.call(_this, appId, id);
  HashStubOutput.call(_this);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ObjectOutput.constructFromObject(data, obj);
    HashStubOutput.constructFromObject(data, obj);
  }
  return obj;
}

exports.prototype['appId'] = undefined;
exports.prototype['id'] = undefined;
exports.prototype['hashes'] = undefined;

module.exports = exports;
