const express =require('express');
const fs = require('fs');
const path =require('path');
const body =require('body-parser');
const mongoose =require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
const favicon = require('serve-favicon');//Creer un petit icon pour le website 
const logger = require('morgan');// Creer des logs(des messages comme error, info, warning) pour le server
const cookieParser = require('cookie-parser');//Utiliser le cookie, l'envoyer au client
const passport=require('passport');
const cors =require('cors');
const User = require('./models/user');


var routesApi = require('./routes/index');//Definir le route general pointe à index.js

const app =express();
require('./models/db');
require('./config/passport');

app.use(logger('dev'));
app.use(body.json());
app.use(body.urlencoded({extended:true}));
app.use(cookieParser());//Utiliser les cookies
//Utiliser le cors --> CROSS ORIGIN REQUEST SERVICE
app.use(cors());
app.use(passport.initialize());
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT"); // Nous acceptions que un certain type de requettes HTTP.
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Afin de pouvoir recevoir le Token
 next();
});

//Definir un chemin statique pour acceder aux images dans le dossier "images"
app.use('/images',express.static(path.join(__dirname, '/images')));
app.use('/api',routesApi);//utiliser ce route 

//En bas pour gerer l'erreur
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


//Utiliser si on veut deploier notre server dans autre mode, sinon pas important
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
if (app.get('env') === 'production') {
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
})};

module.exports = app;
