var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Tell mongoose what promise library to use
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default : false
  },
  completedAt: {
    type: Number,
    default : null
  }
});

var newTodo = new Todo({
  text: ' Edit this video '
})

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo: ', e);
});
