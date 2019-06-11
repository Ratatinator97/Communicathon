var mongoose = require('mongoose');
const Picto = require('./picto');

var CalendarSchema = new mongoose.Schema({

    jour: {
        lundi:{
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        },
        mardi: {
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        },
        mercredi: {
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        },
        jeudi: {
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        },
        vendredi: {
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        },
        samedi: {
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        },
        dimanche:{
            matinPicto1: Picto,
            matinPicto2: Picto,
            midiPicto1: Picto,
            midiPicto2: Picto,
            apmidiPicto1: Picto,
            apmidiPicto1: Picto,
            evtSpecialPicto1: Picto,
            evtSpecialPicto2: Picto,
        }
    }
});

module.exports = mongoose.model('Calendar', CalendarSchema);