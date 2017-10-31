//we can later load this router into the app by requiring it and then using app.use('/thing', thing)


var express = require('express');
var router = express.Router();


//on a get request to router of form '/', send back 'Express REST API' wrapped in some html
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

module.exports = router;
