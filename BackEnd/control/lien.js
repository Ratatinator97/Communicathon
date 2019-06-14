var Lien = require('../models/liens');

const mongoose = require('mongoose');
const User = mongoose.model('User');

// Quand l'utilisateur veut voir ses liens...
module.exports.view=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        // On cherche quel utilisateur nous a fait la requete (regarder le Token)
        User
        .findById(req.payload._id).populate('liensUtilisateur').exec(function(err, user) {
            // .populate cherche les _id dans le champ "lienUtilisateur" et les remplace par les objets ayant l' _id correspondant
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
        if(req.file==undefined){
          return res.status(401).json({
           "message" : "Not upload a file"
          });
        } else {
            User.findById(req.payload._id, function(err, user){
                let newpath;
                newpath = 'http://localhost:4000/images/'+  user.folderPath + "/" + req.file.originalname;
                console.log(req.file.originalname);
                var lien = new Lien({path: newpath, link: req.body.link, contenttype: req.file.mimetype});
                lien.save(function(err, lien ) {
                    if(err){res.status(401).json(err)};
                    console.log(lien);
                    User.findById(req.payload._id, function (err, user) {
                // Une fois le lien crée dans la collection, ajouter l' _id de l'objet crée dans le champ 
                // liensUtilisateur de l'utilisateur ayant fait la demande 
                        user.liensUtilisateur.push(lien);
                        user.save(function (err, user) {
                          console.log(user);
                          res.status(200).json(user.liensUtilisateur)
                    });
                    });
                })
            });

        }
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