var exports = function() {};

exports.constructFromObject = function(data, obj) {
  if (data) {
    obj = obj || new exports();
  }
  return obj;
}

module.exports = exports;
