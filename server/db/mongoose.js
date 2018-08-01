var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //Tell mongoose what promise library to use
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}
