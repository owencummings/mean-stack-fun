var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/User.js');



router.get('/login', function(req, res, next){
  var resBody = {
    name: 'Lorem Ipsum'
  }
  //if (err) return next(err);
  res.json(resBody)
})

router.get('/login/:id', function(req, res, next){
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})



//create new User
router.post('/', function(req, res, next) {
  User.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});



//get all Users
router.get('/', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});




//delete account
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
