const expect = require('expect.js');
const setup = require('../helpers/setup');
const multihash = require('../../src/utils/hashing');

describe('Trust', () => {
  let topaz;

  beforeEach('get a fresh api instance', done => {
    setup.freshInstance().then(api => {
      topaz = api;
      done();
    });
  });

  describe('without an existing object', () => {
    it('takes binarylike data and returns the data and new api object', done => {
      const inputData = "hello world";
      
      topaz.trust(inputData).then(response => {
        expect(response.data).to.be(inputData);
        expect(response.object).to.be.an(Object);
        expect(response.object.appId).to.be(topaz.appId);
        expect(response.object.hashes[0].hash).to.be(multihash(inputData));
        done();
      });
    });
  });

  describe('with an existing object', () => {
    let objectId;

    beforeEach('make an object', done => {
      topaz.objects.create().then(data => {
        objectId = data.id
        done();
      });
    });

    it('takes binarylike data and returns the data and existing api object', done => {
      const inputData = 'hello world';
      
      topaz.trust(inputData, objectId).then(response => {
        expect(response.data).to.be(inputData);
        expect(response.object).to.be.an(Object);
        expect(response.object.id).to.be(objectId);
        expect(response.object.appId).to.be(topaz.appId);
        expect(response.object.hashes[0].hash).to.be(multihash(inputData));
        done();
      });
    });

    it('appends a hash to the object hash list', done => {
      const inputData = 'hello world';
      const otherInputData = 'hello galaxy';

      topaz.trust(inputData, objectId)
      .then(_ => topaz.trust(otherInputData, objectId))
      .then(response => {
        expect(response.data).to.be(otherInputData);
        expect(response.object.id).to.be(objectId);
        expect(response.object.appId).to.be(topaz.appId);
        expect(response.object.hashes).to.have.length(2);
        expect(response.object.hashes[0].hash).to.be(multihash(inputData));
        expect(response.object.hashes[1].hash).to.be(multihash(otherInputData));
        done();
      });
    });
  });
});