const crypto = require('crypto');
const multihashes = require('multihashes');

const multihash = (input) => {
  const hash = crypto.createHash('sha256').update(input).digest();
  const multi = multihashes.encode(hash, 'sha2-256');
  const b58 = multihashes.toB58String(multi);
  return b58;
}

module.exports = multihash;
