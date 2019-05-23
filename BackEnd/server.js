const app=require('./app');
const http =require('http');
const debug = require('debug')('http:server');//debugger le server
var port =  '4000';
app.set('port', port);
//Creer un server http lui meme, presque pareil à app.listen()
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
//pour debugger facilement l'error dans le server
server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
/**
 * Event listener for HTTP server "listening" event.
 * Ce qui nous permet de observer l'etat du server 
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}