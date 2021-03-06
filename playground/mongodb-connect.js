// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Miguel', age : 37};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp')

  db.collection('Users').insertOne({
    name: 'Miguel',
    age: 37,
    location: 'Boston'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert todo.', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();

});
