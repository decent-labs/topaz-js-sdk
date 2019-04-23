const crypto = require('crypto');
const multihash = require('../../src/utils/hashing')

const hexString = (length) => {
  let rs = crypto.randomBytes((length + 1) / 2).toString('hex');
  if (length % 2 == 1) rs = rs.substring(0, rs.length - 1);
  return rs;
}

const sha256HexHash = () => {
  const hash = crypto.createHash('sha256').update(hexString(1024)).digest('hex');
  return hash;
}

const sha256Base58Multihash = () => {
  const rando = crypto.randomBytes(1024);
  const hash = multihash(rando);
  return hash;
}

module.exports = { hexString, sha256HexHash, sha256Base58Multihash };
