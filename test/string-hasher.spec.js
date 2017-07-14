
const hasher = require('../lib/hasher');
const expect = require('chai').expect;

describe('hasher', () => {

  const stringToHash = 'string to hash';
  let hash;

  it('hash should return a hash for a given string', (done) => {
    hasher.hash(stringToHash, (err, result) => {
      expect(err).to.be.null;
      expect(result).to.be.not.null;
      hash = result;
      done();
   });
  });

  it('equals should successfully compare the string and its hashed value', (done) => {
    hasher.equals(stringToHash, hash, (err, result) => {
      expect(result).to.be.true;
      done(); 
    });
  });
});
