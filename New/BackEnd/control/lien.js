var Lien = require('../models/liens');

const mongoose = require('mongoose');
const User =mongoose.model('User')

module.exports.view=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
        .findById(req.payload._id).populate('liensUtilisateur').exec(function(err, user) {
            if(err) return next(err);
            res.status(200).json(user.liensUtilisateur)
        });
    };
};

module.exports.create=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
    var lien = new Lien(req.body);
    lien.save(function(err, lien ) {
        User.findById(req.payload._id, function (err, user) {
             user.liensUtilisateur.push(lien);
             user.save(function (err, user) {
                res.status(200).json(user)
             });
        });
    })
    }
};


module.exports.remove=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        Lien.remove({_id: req.params.id}).exec().then( function() {
            res.status(201).json({message: "Lien deleted"})
        });

    }
};