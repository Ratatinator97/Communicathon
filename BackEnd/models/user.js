const mongoose=require('mongoose');
const Lien = require('./liens');//Utiliser la collection Lien 
const crypto=require('crypto');//Utiliser pour encoder le password
const jwt =require('jsonwebtoken');//Utiliser pour creer un token 
//Un token aide à continuer et à verifier l'user facilement sans tous reverifier son profil
const Image =require('./Image');//Utiliser la collection Image
const Fiche =require('./fiches');
const Picto = require('./picto');
var Schema = mongoose.Schema;


// Definition du Schema du user
let User = new Schema({
   
	nom:{ type: String, required: true},
	prenom:{ type: String, required: true},
	email:{type:String,unique:true,required: true},
	DoB:{type:Date,required: true},
  sexe:{type:String,required: true},
	hash:String,
	salt:String,	
	cardID: {
		address: String,
		phone: String,
		contact1: {
	 		name: String,
	 		email: String,
	 		phone: String
		},
		contact2: {
			name: String,
			email: String,
			phone: String
	   },
		medical_Data: String,
		talk_Ability: String,
		understand_Ability: String,
		known_Languages: String,
		updated_at: { type: Date, default: Date.now }
	},
	image:[{type:Schema.Types.ObjectId,ref:'Image'}],
	liensUtilisateur: [ { type: Schema.Types.ObjectId, ref: 'Lien'}],
	fichesUtilisateur: [ { type: Schema.Types.ObjectId, ref: 'Fiche'}],
	pictoUtilisateur: [{ type: Schema.Types.ObjectId, ref: 'Picto'}]
	
});

//Encoder password avec crypto
User.methods.setPassword=function(password){
 this.salt=crypto.randomBytes(16).toString('hex');
 this.hash=crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');

};
//Verifier le password
User.methods.validPassword=function(password){
 var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
 return this.hash===hash;
};
//Creer un token 
User.methods.generateJwt=function(){
	var expiry=new Date();
	expiry.setDate(expiry.getDate()+3);//Creer un expire temps pour le token,verifier la presence d'user
	return jwt.sign({
	  _id:this.id,
	  email:this.email,
	  nom:this.nom,
	  prenom:this.prenom,
	  dateofbirth:this.DoB,
	  sexe:this.sexe,
	  exp:parseInt(expiry.getTime()/1000),
	},"MY_SECRET");
};
module.exports=mongoose.model('User',User);