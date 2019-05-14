const mongoose = require('mongoose');
const User =mongoose.model('User')

module.exports.view=function(req,res){
    
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
            .findById(req.payload._id)
            .exec(function(err, user) {
                if(err) return next(err);
                res.status(200).json(user.cardID)
        });
    }
}   

module.exports.edit=function(req,res){
    
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User
            .findByIdAndUpdate(req.payload._id)
            .exec(function(err, user) {
                if(err) return next(err);
                res.status(200).json(user.cardID);
        });
    }
}

