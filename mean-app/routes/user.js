var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/User.js');


//create new User
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



//change password?



//delete account
router.delete('/:id', function(req, res, next) {
  Album.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
