const mongoose=require('mongoose');
var Schema = mongoose.Schema;

let Image =new Schema({
      path:String,
      description:String,
      contenttype:String,
});

module.exports=mongoose.model('Image',Image);