const jwt = require('jsonwebtoken');

var data = {
  id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token); // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU0NDYzMTI0MH0.3syJQY8XJBK6IijvtNPOLDJLCy7LCYiqF0Ew_Eqhkis
// HEADER.PAYLOAD.HASH
// Check token at jwt.io

var decoded = jwt.verify(token, '123abc');
console.log(decoded); // { id: 10, iat: 1544631537 }