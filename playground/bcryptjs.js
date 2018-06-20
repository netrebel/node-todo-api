const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('Hashed password: ' + hash);

    bcrypt.compare(password, hash, (err, res) => {
      console.log(res);
    });
  });
});

// var hashedPassword = '$2a$10$ci6uqG5gnIRHpJWJi/Q41uhrBwGkfuMvPBNO15qmVMFzid.DKHf4C';
