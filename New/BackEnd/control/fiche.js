const mongoose = require('mongoose');
const User = mongoose.model('User')

var FicheWE = require('../models/fiches');

module.exports.view=function(req,res){
    
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id).populate('fiches')
            .exec(function(err, user) {
                if(err) return next(err);
                res.status(200).json(user)
        });
    }
}

module.exports.create=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
    var fiche = new FicheWE(req.body);
    fiche.save(function(err, lien ) {
        User.findById(req.payload._id, function (err, user) {
             user.fiches.push(lien);
             user.save(function (err, user) {
                res.status(200).json(user)
             });
        });
    })
    }
}

module.exports.edit=function(req,res){
    
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
            .findByIdAndUpdate(req.payload._id, req.body)
            .exec(function(err, user) {
                if(err) return next(err);
                res.status(200).json(user)
        });
    }
}

module.exports.remove=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        FicheWE.remove({_id: req.params.id}).exec().then( function() {
            res.status(201).json({message: "Fiche deleted"})
        });

    }
}