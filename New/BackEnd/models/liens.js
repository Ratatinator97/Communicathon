var mongoose = require('mongoose');

var LienSchema = new mongoose.Schema({
    label: String,
    path: String,
});

module.exports = mongoose.model('Lien', LienSchema);