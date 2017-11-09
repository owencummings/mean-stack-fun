var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');


var mongoose = require('mongoose');
var passport = require('passport');

require('./models/User');
require('./config/passport');

var index = require('./routes/index');

var app = express();

mongoose.Promise = global.Promise;


//connecting to local database at default port, make sure you have data/db in C:\ drive or some other defined path
mongoose.connect('mongodb://localhost/mean-app')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

//need to figure out what this does
//I know that app.use() does something for any time you access the stack
//these look to be mostly formatting for dev?
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));


//meed to add passport before using the routes
app.use(passport.initialize());
//use .routes/album as /album URI redirect
app.use('/api', index);



//setting up the error term?
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
  //Isnt this supposed to send to next app.VERB() that has an err term in function?
  //Why would we do this for everything?
  //I guess if it is at the end it is OK.
});


//if thrown an auth error, send back a 401 and do something
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.use(function(err, req, res, next) {
  //err is sent here from the previous middleware
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ error: err }) //renders error view and sends it back to client
});


module.exports = app;
