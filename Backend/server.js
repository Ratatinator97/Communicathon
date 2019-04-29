const express        = require('express');
const mongoose = require('mongoose');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
require('./app/routes')(app, {});

mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function() {
    console.log('Listening on port 3000...');
    app.listen(port);
});
