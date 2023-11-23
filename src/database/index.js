const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://devsamuelcosta:tiSF0NdEvEfCxMnE@cluster0.rislswl.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;