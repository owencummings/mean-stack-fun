var router = require('express').Router();

//set up the app to configure with our secret
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'token'
});

// split up route handling

router.use('/user', require('./user'));
router.use('/album', require('./album'));
// etc.

module.exports = router;
