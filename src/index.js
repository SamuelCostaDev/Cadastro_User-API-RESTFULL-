const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
require('./controllers/productController')(app);

app.listen(process.env.PORT || 8080, () => {
    console.log("Deu certo");
});