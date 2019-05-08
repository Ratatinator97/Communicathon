const mongoose = require('mongoose');
const CardId =mongoose.model('User')

module.exports.get=function(req,res){
    User.findOne({}).populate('cardID').exec(function(err, info) {
        console.log(info); 
    });
}