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
//get profile
router.get('/profile',auth,ctrlProfile.profileRead);
//authentication
router.post('/register',ctrlAuth.register);
router.post('/login',ctrlAuth.login);
module.exports=router;