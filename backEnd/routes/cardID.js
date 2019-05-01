var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var CardID = require('../models/CardID.js');

/* GET THE CARDID */
// ON A BESOIN DE PRENDRE L'ID DE L'USER !!! JSP COMMENT FAIRE ENCORE
router.get('/', function(req, res, next) {
  CardID.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE THE CARDID */
router.post('/', function(req, res, next) {
  CardID.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE THE CARDID */
router.put('/', function(req, res, next) {
  CardID.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE THE CARDID */
router.delete('/', function(req, res, next) {
  CardID.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;