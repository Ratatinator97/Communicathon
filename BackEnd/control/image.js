
const mongoose = require('mongoose');
const User = mongoose.model('User');
var PictoMail=require('.././models/Image');


var sendJson=function(res,status,content){
	res.status(status);
	res.json(content);
};

//Envoyer tous les images que le client possedent
module.exports.getPhoto=function(req,res){
   if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  }else{
      User
      .findById(req.payload._id).populate('pictoMail')//findByIdandUpdate?
      .exec(function(err, user) {
        
      if(!user){   
      
        return res.status(401).json({"message": "user don't exist"})}
       	
       if(user){

        
         
         return res.status(200).json(user.pictoMail);

        }
        else { 
        	return sendJson(res,400,"Error: you don't have album ");
           }
       });

  	 
  }
};

//Enregistrer le nouveau lien vers le nouvelle image du client dans la base de donné
module.exports.upload=function(req,res){

    if (!req.payload._id) {
     return res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  }
  console.log(req.file.originalname);
  if(req.file==undefined){
  	return res.status(401).json({
      "message" : "Missing uploaded file"
    });
  }
  let newpath;
  User.findById(req.payload._id,function(err,user){
    newpath = 'http://localhost:4000/images/'+ user.folderPath  +"/"+  req.file.originalname;
    var picto =new PictoMail({ path: newpath, description: req.body.description, contenttype : req.file.mimetype });  
    picto.save(function(err){if(err){res.status(401).json(err)}});
    User.findById(req.payload._id).exec(function(err,user){
      user.pictoMail.push(picto);
      user.save(function(err){
        if(err){res.status(401).json( {"message" : "Not enough memory"})}
        res.status(200).json({"message":"Upload succesful"});
        console.log(user.pictoMail);
      })
  
    });
  });
};



