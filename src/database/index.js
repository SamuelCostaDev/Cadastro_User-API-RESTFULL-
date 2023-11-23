const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
    useUnifiendTopology: true,
    useNewUrlParser: true,
},
() => {
    console.log(("DB connected"))
}
);
mongoose.Promise = global.Promise;

module.exports = mongoose;