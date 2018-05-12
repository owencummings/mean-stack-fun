var app = require('../app');
var debug = require('debug')('mean-app:server');
var http = require('http');

//set port to either environment port OR 3000
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//create server from app.js
var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


//need to add event listening and maybe a normalizePort?
//still understanding what this stuff does Vv
/**
 * Normalize a port into a number, string, or false.
 */

//allows us to use parsed port later?
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


/**
 * Event listener for HTTP server "error" event.
 */

 //processes certain server errors by logging to console and stopping the command??
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

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
 */

//logs pipe/port in debug when used
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}