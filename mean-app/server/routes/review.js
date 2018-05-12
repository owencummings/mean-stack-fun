var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Review = require('../models/Review.js');
var cors = require('cors');


//allow requests from a server other than this one
router.use(cors())



router.post('/', function(req, res, next) {
  Review.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
  //this should be fine so long as the req.body contains the appropriate album and user IDs
});

router.get('/', function(req, res, next) {
  Review.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/user/:id', function(req, res, next) {
  Review.find({authorId: req.params.id}, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/album/:id', function(req, res, next) {
  Review.find({albumId: req.params.id}, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.get('/:id', function(req, res, next) {
  Review.findById(req.params.id, function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});




module.exports = router;
