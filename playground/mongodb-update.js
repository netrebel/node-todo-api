const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id : new ObjectID('5ae89a9e0b63624945a792d8')
  }, {
    $set : {
      completed : false
    }
  }, {
    returnOriginal : false
  })

  client.close();

});
