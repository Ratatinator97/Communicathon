var mongoose = require('mongoose');

var cardIDSchema = new mongoose.Schema({
  userID: String,
  name: String,
  surname: String,
  date_Of_Birth: Date,
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

module.exports = mongoose.model('CardID', cardIDSchema);