

const express        = require('express');
const bodyParser     = require('body-parser');
const mongoose = require('mongoose');

const port = 4000;
const app = express();
const router = express.Router();
const user_route = require('./routes/route_user');

app.use(bodyParser.urlencoded({ extended: true }));
/* DATABASE CONNECTION */

mongoose.connect('mongodb://localhost/database');
const connection = mongoose.connection;
const User = require('./models/User');
const CardID = require('./models/CardID');
connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
/* ---------------------*/


app.use('/', router);
app.use('/user', user_route);

app.listen(port, () => {
  console.log('We are live on ' + port);
});