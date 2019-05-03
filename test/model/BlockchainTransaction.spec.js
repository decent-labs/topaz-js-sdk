const expect = require('expect.js');
const random = require('../helpers/random');
const TopazApi = require('../../src/topaz');

describe('BlockchainTransaction', function() {
  var instance, blockchainNetwork, transactionHash, explorers;

  beforeEach(function() {
    blockchainNetwork = 'ethereum goerli';
    transactionHash = '0x' + random.sha256HexHash();
    explorers = ['explorer link 1', 'explorer link 2'];

    instance = new TopazApi.BlockchainTransaction(blockchainNetwork, transactionHash, explorers);
  });

  it('should create an instance of BlockchainTransaction', function() {
    expect(instance).to.be.a(TopazApi.BlockchainTransaction);
  });

  it('should have the property blockchainNetwork (base name: "blockchainNetwork")', function() {
    expect(instance.blockchainNetwork).to.be(blockchainNetwork);
  });

  it('should have the property transactionHash (base name: "transactionHash")', function() {
    expect(instance.transactionHash).to.be(transactionHash);
  });

  it('should have the property explorers (base name: "explorers")', function() {
    expect(instance.explorers).to.be(explorers);
  });
});
