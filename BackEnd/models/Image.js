const mongoose=require('mongoose');
var Schema = mongoose.Schema;

let ImageMail =new Schema({
      path:String,
      description:String,
      contenttype:String,
});

module.exports=mongoose.model('PictoMail',ImageMail);