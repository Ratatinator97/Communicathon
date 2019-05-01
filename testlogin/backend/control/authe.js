const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
//Envoyer le json
var sendJson=function(res,status,content){
	res.status(status);
	res.json(content);
};
//Creer la fonction de la registre quand il y a nouveau user
module.exports.register=function(req,res){
	if(!req.body.nom||!req.body.prenom||!req.body.email||!req.body.password){
		sendJson(res,400,{
			"message":"You have to fullfil all field"
		});
		return;
	}
	var user=new User();
	user.nom=req.body.nom;
	user.prenom=req.body.prenom;
	user.email=req.body.email;
	user.setPassword(req.body.password);
	//Sauvergarder dans le DB
	user.save(function(err){
		var token;
		token=user.generateJwt();
		res.status(200);
		res.json({
			"token":token
		});
	});
};
//Creer la fonction pour login
module.exports.login=function(req,res){
	if(!req.body.email||!req.body.password){
		sendJson(res,400,{
			"message":"You have to fullfil all field"
		});
		return;
	}
	//Verifier si user dans le DB 
	passport.authenticate('local',function(err,user,info){
       var token;
       if(err){
       	res.status(404).json(err);
       	return;
       }
       if(user){
       	 token=user.generateJwt();
       	 res.status(200);
       	 res.json({
       	 	"token":token
       	 });
       }else{
       	res.status(401).json(info);
       }
	})(req,res);
}