var Lien = require('../models/liens');
var User = require('../models/user');

module.exports.view=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
        .findById(req.payload._id)
        .exec(function(err, user) {
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
     Lien.save(function(err){
        if(err){res.status(400).json({message: "Un probleme est survenu"})};
        Lien.populate(lien, {path:"_owner"}, function(err, info){
            if(err){res.status(400).json({message: "Un probleme est survenu"})};
            res.json(info);
        })
        });
    }
};


module.exports.delete=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        var id = req.payload._id;
        Lien.remove({
                _owner: id
            }), function(err) {
                if(err) res.status(400).json({message: "There was a problem"});
                res.json({message: "Succesfully removed..."});
        };

    }
};