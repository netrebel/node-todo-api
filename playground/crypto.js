var crypto = require('crypto'); 

// random tokens
var buf = crypto.randomBytes(16).toString('hex');
console.log('Random token of %d bytes in hexadecimal: %s', buf.length, buf);
var buf = crypto.randomBytes(16).toString('base64');
console.log('Random token of %d bytes in base 64: %s', buf.length, buf);

// a hashed message authentication checksum (HMAC) using a shared secret key
var string = 'My coffee please';
var key = 'Right away sir';

var encrypted = crypto.createHmac('sha1', key).update(string).digest('hex');
console.log('Encrypting "%s" using passphrase "%s": %s', string, key, encrypted);

// a MD5 hash
var hashmd5 = crypto.createHash('md5').update(string).digest('hex');
console.log('The MD5    hash of "%s" is %s', string, hashmd5); 

// a SHA1 hash
var hashsha1 = crypto.createHash('sha1').update(string).digest('hex');
console.log('The SHA1   hash of "%s" is %s', string, hashsha1);

// a SHA256 hash
var hashsha256 = crypto.createHash('sha256').update(string).digest('hex');
console.log('The SHA256 hash of "%s" is %s', string, hashsha256);