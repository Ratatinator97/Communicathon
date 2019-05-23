const express=require('express');
const router=express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});
//Creer des routers pour le profil et le login, registre comme app.get('/...')

var ctrlCard=require('../control/cardID');
//get profile
router.get('/cardID',auth,ctrlCard.profileRead);
//authentication

//router.post('/cardID',CardId.edit);
module.exports=test;