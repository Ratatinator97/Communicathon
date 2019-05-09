const mongoose = require('mongoose');
const User =mongoose.model('User')

module.exports.get=function(req,res){
    console.log("get recu");
    User.find((err, info) => {
        res.json(info);
        console.log(info);  
    })
}