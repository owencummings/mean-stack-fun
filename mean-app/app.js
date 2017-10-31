var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var album = require('./routes/album');
var app = express();

//need to figure out what this does
//I know that app.use() does something for any time you access the stack
//these look to be mostly formatting for dev?
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));

//use .routes/album as /album URI redirect
app.use('/album', album);


//setting up the error term?
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
  //Isnt this supposed to send to next app.VERB() that has an err term in function?
  //Why would we do this for everything?
  //I guess if it is at the end it is OK.
});


app.use(function(err, req, res, next) {
  //err is sent here from the previous middleware
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error'); //renders error view and sends it back to client
});


module.exports = app;
