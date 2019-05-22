const picto = require('../config/multer.js');
const mongoose = require('mongoose');
const User = mongoose.model('User');
var Image=require('.././models/Image');
const fs = require('fs');
const imgFolder =  'images';

var sendJson=function(res,status,content){
	res.status(status);
	res.json(content);
};


module.exports.getPhoto=function(req,res){
   if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  }else{
      User
      .findOne({_id:req.payload._id}).populate('image')//findByIdandUpdate?
      .exec(function(err, user) {
       if(!user){return res.status(401).json({"message": "user don't exist"})}
       	
       if(user){

        for(let i=0;i<user.image.length;++i){
            var path = user.image[i].path.replace("http://localhost:4000/","");
            fs.access(path, fs.F_OK, (err) => {
               if (err) {
                Image.remove({_id: user.image[i]}).exec().then(function(err){
                  console.log(err);
                })
                user.image.pull(user.image[i]);
                
             }
          });

         }
         user.save(function(err){console.log(err)});
         
         return res.status(200).json(user.image);

        }
        else { 
        	return sendJson(res,400,"Error: you don't have album ");
           }
       });

  	 
  }
};

module.exports.upload=function(req,res){

    if (!req.payload._id) {
     return res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  }
  console.log(req.file.originalname);
  if(req.file==undefined){
  	return res.status(401).json({
      "message" : "Not upload a file"
    });
  }
  let newpath;
  
  newpath = 'http://localhost:4000/images/' +  req.file.originalname;
  var image =new Image({ path: newpath, description: req.body.description, contenttype : req.file.mimetype });  
  image.save(function(err){if(err){res.status(401).json(err)}});
  User.findById(req.payload._id).exec(function(err,user){
    user.image.push(image);
    user.save(function(err){
      if(err){res.status(401).json( {"message" : "Not enough memory"})}
      res.status(200).json({"message":"Upload succesful"});
      console.log(user.image);
    })

  })

};



