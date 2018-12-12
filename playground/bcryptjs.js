const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');
const base64 = require('crypto-js/enc-base64');

var password = '123abc!';
console.log('password:           ' + password);


console.log('SHA256:             ' + SHA256("123abc!").toString());
console.log('base64 from SHA256: ' + base64.stringify(SHA256("123abc!")));

console.log('base64:             ' + Buffer.from(password).toString('base64'));

bcrypt.genSalt(10, (err, salt) => {
  console.log('salt:               ' + salt)
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('bcrypt.hash:        ' + hash);
  });
});

var hashedPassword = '$2a$10$ci6uqG5gnIRHpJWJi/Q41uhrBwGkfuMvPBNO15qmVMFzid.DKHf4C';
bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});