var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Card = require('../models/CardID.js');

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
    Card.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  /* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
    Card.find(function (err, users) {
      if (err) return next(err);
      res.json(users);
    });
  });


/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
    Card.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  /* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
    Card.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
  /* DELETE PRODUCT */
  router.delete('/:id', function(req, res, next) {
    Card.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  module.exports = router;