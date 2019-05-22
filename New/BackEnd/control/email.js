const mongoose = require('mongoose');
const User = mongoose.model('User');
//const sgMail = require('@sendgrid/mail');
const Mailer=require('nodemailer')
const fs=require('fs');
//var SENDGRID_API_KEY = fs.readFileSync('api_key.txt', 'utf8');
//sgMail.setApiKey(SENDGRID_API_KEY);
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
        contact[1]=user.cardID.contact2.email;
        email=user.email; 
        
        if(user.cardID.contact1.email==undefined||user.cardID.contact2.email==undefined){
          return res.status(400).json({
                 "message" : "You don't have any contacts in CardId. Please click the link below to edit yours contact"
              });
        }      
 
  var message=req.body.message.replace("_"," ");
  var transporter=Mailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service:'yahoo',
            secure: false,
            auth: {
               user: 'communicathon@yahoo.com',
               pass: 'password.3TC'
            },
            debug: false,
            logger: true,
})
 let msg = {
     from: 'communicathon@yahoo.com',
     to: contact,
     subject: 'Sending from your children via Communicathon',
     text: 'and easy app Communicathon',
     html:'<h2>Communicathon email </h2><br>'+ 
          '<p><b>Email urgent sent by your children'+ user.nom +'-'+ user.prenom+'</b> : '+ message + ' </p>',
};
transporter.sendMail(msg, function(error, info){
  if (error) {
    console.log(error);
  } else {
    res.json(info);
  }
})
/*sendgrid
  sgMail.send(msg,(err,result)=>{
  	if(err){res.status(401).json(err)
     }else{
     	res.json({"message" : "Message is sent"})
     }

  });*/
  
  
 });
}

