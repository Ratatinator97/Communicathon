var mongoose = require('mongoose');
const Schema = mongoose.Schema;
let cardID = new Schema({
  userID: String,
  address: String,
  personnal: {
    email: String,
    phone: String
  },
  contact1: {
    name: String,
    email: String,
    phone: Number
  },
  medical_Data: String,
  talk_ability: Boolean,
  understand_ability: Boolean,
  known_Languages: String,
  updated_at: { type: Date, default: Date.now },
});

cardID.methods.validID=function(id){
  return this.userID===id;
}

module.exports = mongoose.model('CardID', cardID);