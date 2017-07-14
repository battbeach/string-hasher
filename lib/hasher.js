
var bcrypt = require('bcrypt');

function hash(string, cb) { 
  const saltRounds = 10;
  bcrypt.hash(string, saltRounds, (err, hash) => {
    if (err) {
      return cb(err);
    }
    return cb(null, hash);
  });
};

function equals(string, hash, cb) { 
  bcrypt.compare(string, hash, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  }); 
}

module.exports = {
  hash: hash,
  equals: equals
} 
