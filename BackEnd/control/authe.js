const passport = require('passport');//Utiliser le paasport pour verifier l'utilisateur
const mongoose = require('mongoose');
const User = mongoose.model('User');
const fs = require('fs');//Pour lire les fichiers dans le dossier 'images'
const imgFolder = 'images';
const PictoMail=require('.././models/Image');
//Envoyer le json
var sendJson=function(res,status,content){
	res.status(status);
	res.json(content);
};
//Creer la fonction de la registre quand il y a nouveau user
module.exports.register=function(req,res){
	if(!req.body.nom||!req.body.prenom||!req.body.email||!req.body.password){
		sendJson(res,400,{
			"message":"Rempli tous case "
		});
		return;
	}
	//Verifier si le client a deja inscrit
	User.findOne({email:req.body.email},function(err,obj){
		if(err){return res.status(404).json(err); }
		if(obj){ sendJson(res,400,{
			"message":"email deja utilise"
		});return;}
		if(!obj){
			
			var user=new User();
	        user.nom=req.body.nom;
	        user.prenom=req.body.prenom;
	        user.email=req.body.email;
	        user.DoB=req.body.dateofbirth;
	        user.sexe=req.body.sexe;
			user.setPassword(req.body.password);
			folderName=((user.nom)+(user.prenom)+(Math.random())).replace("/","").replace(".","");
			fs.mkdirSync(imgFolder+"/"+folderName);
			user.folderPath=folderName;
	        //Creer des liens vers les images commune stocké dans le serveur et les enregistrer dans la base de donné
	        user.pictoMail=[];
	        var files = fs.readdirSync(imgFolder);//Creer des liens vers les images stocké dans le serveur et les enregistrer
                for (let i = 0; i < files.length; i++) {
                    var images =new PictoMail();
                    if(files[i].includes('cm')){
                    files[i] = "http://localhost:4000/images/" + files[i];
                    images.path=files[i];
                    images.description=files[i].split(/[.-]+/)[1].toLowerCase();
                    images.contenttype=files[i].split(/[.-]+/)[2].toLowerCase();
                    images.save(function(err){return console.log(err)});
                    user.pictoMail.push(images);
                	}
                      
                };
	            //Sauvergarder dans le DB
	           user.save(function(err){
		         var token;
		         token=user.generateJwt();
		         res.status(200);
		         res.json({
			         "token":token
		           });
	            });
	       }	
	});

	
};
//Creer la fonction pour login
module.exports.login=function(req,res){
	if(!req.body.email||!req.body.password){
		sendJson(res,400,{
			"message":"Rempli tous case "
		});
		return;
	}
	//Verifier si user dans le DB 
	passport.authenticate('local',function(err,user,info){
       var token;
       if(err){
       	res.status(404).json(err);//Il n'est pas dans le DB
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