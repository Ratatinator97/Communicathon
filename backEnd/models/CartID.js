var mongoose = require('mongoose');

var cardIDSchema = new mongoose.Schema({
  userID: String,
  name: String,
  surname: Number,
  date_Of_Birth: Date,
  address: String,
  personnal_Email: String,
  personnal_Phone: Number,
  contact1_Name: String,
  contact1_Email: String,
  contact1_Phone: Number,
  medical_Data: String,
  talk_ability: Boolean,
  understand_ability: Boolean,
  // known_Languages: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CardID', cardIDSchema);