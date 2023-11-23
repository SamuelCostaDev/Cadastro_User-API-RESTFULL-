const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));


app.set('view engine', 'ejs');

require('./controllers/authController')(app);

app.listen(process.env.PORT || 8080, () => {
    console.log("Deu certo");
});