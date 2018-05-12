//we can later load this router into the app by requiring it and then using app.use('/thing', thing)


var express = require('express');
var cors = require('cors');
var router = express.Router();
var mongoose = require('mongoose');
var Album = require('../models/Album.js');


//allow requests from a server other than this one
router.use(cors())


//the following just access the mongoose Schema from Album.js and do the required action

//get all albums
router.get('/', function(req, res, next) {
  Album.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

// get single album by id
router.get('/:id', function(req, res, next) {
  Album.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// save album
router.post('/', function(req, res, next) {
  Album.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// update album
router.put('/:id', function(req, res, next) {
  Album.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

// delete album
router.delete('/:id', function(req, res, next) {
  Album.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
