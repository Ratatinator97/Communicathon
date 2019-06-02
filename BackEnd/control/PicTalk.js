var Picto = require('../models/picto');

const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports.view=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        if(req.params.meaning === null){
            User.findById(req.payload._id).populate(pictoUtilisateur).exec(function(err,user){
                if(err){return res.status(402).json(err);}
                return res.status(200).json(user.pictoUtilisateur);
            })
        } else {
            Picto.findOne({user: req.payload._id, meaning: req.params.meaning},function(err,picto){
                if(err){return res.status(401).json(err);}
                picto.populate('childs').exec(function(err,picto){
                    if(err){return res.status(401).json(err);}
                    return res.status(200).json(picto.childs);
                })
            })
        }
    }
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
        }
        let newpath;
        newpath = 'http://localhost:4000/images/pictos/' + req.file.originalname;

        if(father == null){
            nvPicto = new Picto({path:newpath, contenttype: req.file.mimetype, meaning: req.body.meaning, childs: null, folder: req.params.folder, user: req.payload._id});
            nvPicto.save(function(err, picto){
                if(err){res.status(401).json(err)};
                User.findById(req.payload._id, function(err, user){
                    if(err){return res.status(401).json(err);}
                    user.pictoUtilisateur.push(picto);
                    user.save(function(err, user){
                        if(err){return res.status(401).json(err);}
                        res.status(200).json(user.pictoUtilisateur);
                    })
                })
            })

        }
        else {
            Picto.findOne({_id: father}, function(err, father){
                if(err){return res.status(401).json(err);}
                if(father.folder != 1){
                    return res.status(401).json({"message": "Not a folder"});
                }
                nvPicto = new Picto({path:newpath, contenttype: req.file.mimetype, meaning: req.body.meaning, childs: null, folder: req.params.folder, user: req.payload._id});
                nvPicto.save(function(err, picto){
                    if(err){res.status(401).json(err)};
                    father.childs.push(picto);
                    father.save(function(err, father){
                        if(err){return res.status(401).json(err);}
                        res.status(200).json(father.childs);
                    })
                })
            })
        }
    }
};

module.exports.delete=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        Picto.remove({_id: req.params.id}).exec().then( function() {
            res.status(201).json({message: "Picto deleted"})
        });

    }
};
