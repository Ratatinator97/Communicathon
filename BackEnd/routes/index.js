const express=require('express');
const router=express.Router();
//definir un token jwt 
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
//Creer des routers pour tous les requetes comme app.get('/...')
const ctrlAuth=require('../control/authe');
const ResetPW=require('../control/resetpw');
const CardId=require('../control/cardID');
const Liens = require('../control/lien');
const Fiches = require('../control/fiche');
const ctrlEmail=require('../control/email');
const ctrlImg=require('../control/image');
const picto =require('../config/multer');
//Tous les types de requetes
//Pour le login, regitre, remise de password
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/resetpw',ResetPW.resetpassword);
//Pour le cardID
router.get('/cardID',auth, CardId.view);
router.put('/cardID',auth, CardId.edit);
//Pour le lien 
router.post('/liens',auth, picto.single('file'), Liens.create);
router.get('/liens',auth, Liens.view);
router.delete('/liens/:id', auth, Liens.remove);
//Pour le fichier
router.post('/fiches',auth,Fiches.create);
router.get('/fiches', auth, Fiches.view);
router.put('/fiches',auth, Fiches.edit);
router.delete('/fiches/:id',auth, Fiches.remove);

router.get('/image',auth,ctrlImg.getPhoto);
router.post('/upload',auth,picto.single('file'),ctrlImg.upload);

//Pour la fonctionnalité picto mail
router.post('/email',auth,ctrlEmail.sendemail);
module.exports=router;