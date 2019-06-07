var Picto = require('../models/picto');

const mongoose = require('mongoose');
const User = mongoose.model('User');
const fs = require('fs');

module.exports.view=function(req, res) {
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        
        if(req.params.meaning == "root"){
            
            User.findById(req.payload._id).populate('pictoUtilisateur').exec(function(err,user){
                if(err){return res.status(402).json(err);}
                return res.status(200).json(user.pictoUtilisateur);
            });
        } else {
            Picto.findOne({user: req.payload._id, meaning: req.params.meaning}).populate('childs').exec(function(err,picto){
                if(err){return res.status(401).json(err);}
                return res.status(200).json(picto.childs);
    
                });
            
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
             "message" : "No file"
            });
        }
        
        let newpath;
        newpath = 'http://localhost:4000/images/' + req.file.originalname;

        if(req.params.father == "root"){
            
            nvPicto = new Picto({path:newpath, contenttype: req.file.mimetype, meaning: req.body.meaning, childs:[], folder: req.body.folder, user: req.payload._id});
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
            Picto.findById(req.params.father, function(err, father){
                if(err){return res.status(401).json(err);}
                if(father.folder != "1"){
                    return res.status(401).json({"message": "Not a folder"});
                }
                nvPicto = new Picto({path:newpath, contenttype: req.file.mimetype, meaning: req.body.meaning, childs: [], folder: req.body.folder, user: req.payload._id});
                nvPicto.save(function(err, picto){
                    if(err){return res.status(401).json(err)};
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
        Picto.findById(req.params.id, function(err, result){
            if(err){return res.status(401).json({"message": "Error deliting picto"});}
            path = "."+ result.path.slice(21);
            fs.unlink(path, (err) => {
                if (err) throw err;
            });
            Picto.deleteOne({_id: req.params.id}).exec().then( function() {
                res.status(201).json({message: "Picto deleted"})
            });
        });


    }
};
