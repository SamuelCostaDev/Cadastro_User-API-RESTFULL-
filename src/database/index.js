const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sandsoncostati:1bKVbNnLFj3olmpB@cluster0.4eomo7x.mongodb.net/?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

module.exports = mongoose;