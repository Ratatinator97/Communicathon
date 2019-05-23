var mongoose = require('mongoose');

var FicheWE = new mongoose.Schema({
    date_samedi: String,
    date_dimanche: String,
    Samedi_matin: String,
    Samedi_midi: String,
    Samedi_soir: String,
    Dimanche_matin: String,
    Dimanche_midi: String,
    Dimanche_soir: String
});

module.exports = mongoose.model('Fiche', FicheWE);