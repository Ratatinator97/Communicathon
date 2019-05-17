const express=require('express');
const router=express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
//Creer des routers pour le profil et le login, registre comme app.get('/...')
var ctrlProfile=require('../control/profile');
var ctrlAuth=require('../control/authe');
const CardId=require('../control/cardID');
const Liens = require('../control/lien');

//get profile
router.get('/profile', auth, ctrlProfile.profileRead);
//authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);
router.get('/cardID',auth, CardId.view);
router.put('/cardID',auth, CardId.edit);
router.post('/liens',auth, Liens.create);
router.get('/liens',auth, Liens.view);
router.delete('/liens/:id', auth, Liens.remove);

module.exports=router;