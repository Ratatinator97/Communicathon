
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
/*
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

var user = require('./routes/user');

var cardID = require('./routes/cardID');
*/
const port = 4000;
const app = express();
//const router = express.Router();
/*
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://[server]/issues');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});
*/
// DEPRECATED app.use('/', router);
// DEPRECATED app.use('/user', user);
// DEPRECATED app.use('user/cardID',cardID);
require('./routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});