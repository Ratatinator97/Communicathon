const mongoose=require('mongoose');
var Schema = mongoose.Schema;

let PictoSchema = new Schema({
    
    path: String,
    contenttype : String,
    meaning : String,
    folder : String,
    speech: String,
    childs : [{type:Schema.Types.ObjectId,ref:'Picto'}],
    user : {type:Schema.Types.ObjectId,ref:'User'}
});
module.exports = mongoose.model('Picto', PictoSchema);