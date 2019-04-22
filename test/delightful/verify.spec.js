const expect = require('expect.js');
const setup = require('../helpers/setup');
const multihash = require('../../src/utils/hashing');

describe('Verify', () => {
  let topaz;

  beforeEach('get a fresh api instance', done => {
    setup.freshInstance().then(api => {
      topaz = api;
      done();
    });
  });

  describe('with an existing object', () => {
    let objectId;

    beforeEach('make an object', done => {
      topaz.objects.create().then(({ data }) => {
        objectId = data.id;
        done();
      });
    });

    describe('when the hash does not exist', () => {
      const inputData = 'hello world';

      describe('on an object with no hashes', () => {
        it('returns an object with no hashes', done => {
          topaz.verify(inputData, objectId).then(response => {
            expect(response.id).to.be(objectId);
            expect(response.hashes).to.have.length(0);
            done();
          });
        });

        it('has the right status', done => {
          topaz.verify(inputData, objectId).then(response => {
            expect(response.verified).to.be('unverified');
            done();
          });
        });
      });

      describe('on an object with many hashes', () => {
        beforeEach('make some hashes', done => {
          topaz.trust('hello', objectId)
          .then(() => topaz.trust('world', objectId))
          .then(() => done());
        });

        it('returns an object with those hashes', done => {
          topaz.verify(inputData, objectId).then(response => {
            expect(response.id).to.be(objectId);
            expect(response.hashes).to.have.length(2);
            done();
          });
        });

        it('does not have the hash we are looking for', done => {
          topaz.verify(inputData, objectId).then(response => {
            expect(response.hashes.filter(hash => hash.hash == multihash(inputData))).to.have.length(0);
            done();
          });
        });

        it('does not have proof keys on any of those hashes', done => {
          topaz.verify(inputData, objectId).then(response => {
            expect(response.hashes.filter(hash => hash.proof === undefined)).to.have.length(2);
            done();
          });
        });

        it('has the right status', done => {
          topaz.verify(inputData, objectId).then(response => {
            expect(response.verified).to.be('unverified');
            done();
          });
        });
      });
    });

    describe('when the hash does exist', () => {
      const inputData = 'hello world';

      beforeEach('add the hash to the object', done => {
        topaz.trust(inputData, objectId).then(() => done());
      });

      describe('and it is the only instanace of that hash on the object', () => {
        describe('and is not the most recent', () => {
          beforeEach('add some other hash to the object', done => {
            topaz.trust('some stuff', objectId).then(() => done());
          });

          it('is not the most recent (last) hash', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes[response.hashes.length - 1].hash).to.not.be(multihash(inputData));
              done();
            });
          });

          it('has the right status', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.verified).to.be('outdated');
              done();
            });
          });

          it('is in the hash list though', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes.filter(hash => hash.hash == multihash(inputData))).to.have.length(1);
              done();
            });
          });

          it('has a null proof because no proofs are happening in these tests', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes.filter(hash => hash.hash == multihash(inputData))[0].proof).to.be.null;
              done();
            });
          });
        });
    
        describe('and is the most recent', () => {
          it('is the most recent (last) hash', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes[response.hashes.length - 1].hash).to.be(multihash(inputData));
              done();
            });
          });

          it('has a null proof because no proofs are happening in these tests', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes[response.hashes.length - 1].proof).to.be.null;
              done();
            });
          });

          it('has the right status', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.verified).to.be('pending');
              done();
            });
          });
        });
      });

      describe('and it exists more than once on the object', () => {
        beforeEach('add the hash to the object', done => {
          topaz.trust(inputData, objectId).then(() => done());
        });

        describe('and is not the most recent', () => {
          beforeEach('add some other hash to the object', done => {
            topaz.trust('some stuff', objectId).then(() => done());
          });

          it('is not the most recent (last) hash', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes[response.hashes.length - 1].hash).to.not.be(multihash(inputData));
              done();
            });
          });

          it('has the right status', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.verified).to.be('outdated');
              done();
            });
          });

          it('is in the hash list though (more than once)', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes.filter(hash => hash.hash == multihash(inputData))).to.have.length(2);
              done();
            });
          });
        });
    
        describe('and is the most recent', () => {
          it('is the most recent (last) hash', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.hashes[response.hashes.length - 1].hash).to.be(multihash(inputData));
              done();
            });
          });

          it('has the right status', done => {
            topaz.verify(inputData, objectId).then(response => {
              expect(response.verified).to.be('pending');
              done();
            });
          });
        });
      });
    });
  });
});