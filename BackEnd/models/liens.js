var mongoose = require('mongoose');

var LienSchema = new mongoose.Schema({

    path: String,
    link: String,
    contenttype: String,
});

module.exports = mongoose.model('Lien', LienSchema);