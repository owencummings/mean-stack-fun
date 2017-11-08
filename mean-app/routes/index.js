var router = require('express').Router();

// split up route handling

router.use('/user', require('./user'));
router.use('/album', require('./album'));
// etc.

module.exports = router;
