const { Console } = require('console');
const mongoose = require('mongoose');

const mongodbUrl = process.env.MONGODB_URL as string;

// Conectar ao MongoDB
mongoose.connect(
    mongodbUrl,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log("Conectado ao MongoDB");
    }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;