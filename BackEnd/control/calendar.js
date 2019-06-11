const mongoose = require('mongoose');
const User =mongoose.model('User');
const Calendar = mongoose.model('Calendar');

module.exports.view=function(req,res){
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        User.findById(req.payload._id).populate('calendar').exec(function(err,user){
            if(err){return res.status(402).json({"message": err});}
            res.status(200).json(user.calendar);
        });
    }
}

module.exports.modify=function(req,res){
    if(!req.payload._id){
        res.status(401).json({
            "message": "UnauthorizedError: private profile"
        });
    } else {
        Calendar.findByIdAndUpdate(req.params.id,req.body,(err, calendar)=>{
            if(err){return res.status(401).json({"message":err});}
            res.status(200).json(calendar);
        });
    }
}