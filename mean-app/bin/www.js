var app = require('../app');
var debug = require('debug')('mean-app:server');
var http = require('http');

//set port to either environment port OR 3000
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//create server
var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);


//need to add event listening and maybe a normalizePort?
