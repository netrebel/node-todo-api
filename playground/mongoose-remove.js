const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove({})
//Todo.findByIdAndRemove()

Todo.findByIdAndRemove('5b18347d2e563276cf45daf5').then((todo) => {
  console.log(todo);
});
