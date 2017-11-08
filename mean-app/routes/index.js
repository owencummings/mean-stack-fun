var router = require('express').Router();

// split up route handling
router.use('/album', require('./album'));
router.use('/user', require('./user'));
// etc.

module.exports = router;
