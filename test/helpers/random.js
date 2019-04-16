const crypto = require('crypto');
const multihashes = require('multihashes')

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
  const secret = hexString(6);
  const rando = crypto.randomBytes(1024);
  const hash = crypto.createHmac('sha256', secret).update(rando).digest();
  const multi = multihashes.encode(hash, 'sha2-256')
  const b58 = multihashes.toB58String(multi);
  return b58;
}

module.exports = { hexString, sha256HexHash, sha256Base58Multihash };
