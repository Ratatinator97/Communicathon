const express=require('express');
const router=express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
//Creer des routers pour le profil et le login, registre comme app.get('/...')
const ctrlAuth=require('../control/authe');
const ResetPW=require('../control/resetpw');
const CardId=require('../control/cardID');
const Liens = require('../control/lien');
const Fiches = require('../control/fiche');
const ctrlEmail=require('../control/email');
const ctrlImg=require('../control/image');
const picto =require('../config/multer');
//get profile
router.get('/email',auth,ctrlEmail.sendemail);
router.get('/image',auth,ctrlImg.getPhoto);
//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.post('/resetpw',ResetPW.resetpassword);
router.get('/cardID',auth, CardId.view);
router.put('/cardID',auth, CardId.edit);
router.post('/liens',auth, Liens.create);
router.get('/liens',auth, Liens.view);
router.delete('/liens/:id', auth, Liens.remove);
router.post('/fiches',auth,Fiches.create);
router.get('/fiches', auth, Fiches.view);
router.put('/fiches',auth, Fiches.edit);
router.delete('/fiches/:id',auth, Fiches.remove);
router.post('/upload',picto,ctrlImg.upload);
router.post('/email',auth,ctrlEmail.sendemail);

module.exports=router;