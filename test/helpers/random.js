const crypto = require('crypto');

const hexString = (length) => {
  let rs = crypto.randomBytes((length + 1) / 2).toString('hex');
  if (length % 2 == 1) rs = rs.substring(0, rs.length - 1);
  return rs;
}

const sha256HexHash = () => {
  const hash = crypto.createHmac('sha256', hexString(10)).update(hexString(10)).digest('hex');
  return hash;
}

module.exports = { hexString, sha256HexHash };
