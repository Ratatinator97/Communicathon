const mongoose = require('mongoose');
const User = mongoose.model('User');
const sgMail = require('@sendgrid/mail');
var fs = require("fs");
var SENDGRID_API_KEY = fs.readFileSync('api_key.txt', 'utf8');
sgMail.setApiKey(SENDGRID_API_KEY);
var sendJson=function(res,status,content){
	res.status(status);
	res.json(content);
};
module.exports.sendemail=function(req,res){
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    })}; 
   let contact=[];
   let email; 
   User
      .findById(req.payload._id)
      .exec(function(err, user) {
       if(!user){res.status(401).json({
      "message" : "User don't exist"
    }); }
        contact[0]=user.cardID.contact1.email;
        contact[1]=user.cardID.contact2.email;;
        email=user.email; 
        if(contact===undefined){
          sendJson(res,400,{
      "message" : "You don't have any contacts in CardId. Please click the link below to edit yours contact"
    });
        }      
  //let mailist =['tuan-kiet.ngo@insa-lyon.fr','kiet.insa.lyon98@gmail.com'];
 
  var message=req.body.message.replace("_"," ");
  const msg = {
     to: contact,
     from: email,
     subject: 'Sending from your children via Communicathon',
     text: 'and easy app Communicathon',
     html:'<h2>Communicathon email </h2><br>'+ 
          '<p><b>Email urgent sent by your children</b> : '+ message + ' </p>',
};
  sgMail.send(msg,(err,result)=>{
  	if(err){res.status(401).json(err)
     }else{
     	res.json({"message" : "Message is sent"})
     }

  });
  
 });
}

