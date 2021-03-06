const {SHA256} = require('crypto-js');

var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
  id: 4
};

//What will be send back to the user ('somesecret' is the salt in this case)
var token = {
  data,
  hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}

//Thief:
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
if (resultHash === token.hash) {
  console.log('Data was not changed.');
} else {
  console.log('Data was changed. Do not trust!');
}
