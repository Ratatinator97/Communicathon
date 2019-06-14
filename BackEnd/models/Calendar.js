var mongoose = require('mongoose');
const Picto = require('./picto');
var Schema = mongoose.Schema;
let CalendarSchema = new Schema({

    jour: {
        lundi: {
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        },
        mardi: {
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        },
        mercredi: {
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1:{ type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        },
        jeudi: {
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        },
        vendredi: {
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        },
        samedi: {
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        },
        dimanche:{
            matinPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            matinPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            midiPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            apmidiPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto1: { type: Schema.Types.ObjectId, ref: 'Picto'},
            evtSpecialPicto2: { type: Schema.Types.ObjectId, ref: 'Picto'},
        }
    }
});

module.exports = mongoose.model('Calendar', CalendarSchema);