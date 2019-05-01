var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  user_ID: String,
  psswd: String,
});

module.exports = mongoose.model('user', userSchema);