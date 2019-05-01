//On peut le mettre tous ce code dans le app.js, mais je le separe pour reduire la taille du code, ca serve à connecte au MongoDB 
const mongoose=require('mongoose');
var gracefulShutdown;
//connecter a mongodb
var dbURI ='mongodb://localhost/Authentication';
//Ici,pour utiliser dans le mode de la production,en mode general, pas necessaire 
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});
//terminer ou reinitialiser le server, le database
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});