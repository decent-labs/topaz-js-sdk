const ObjectCommon = require('./ObjectCommon');

var exports = function() {
  var _this = this;

  ObjectCommon.call(_this);
};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();

    ObjectCommon.constructFromObject(data, obj);
  }
  return obj;
}

module.exports = exports;
