const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');//Pour stocker les images dans le dossier "images"
const imgFolder =  './images';
const User = mongoose.model('User');

//Creer un storage pour multer et pour le stockage
var storage = multer.diskStorage({
    
    destination: (req, file, cb) => {
    User.findById(req.payload._id,function(err,user){
        var stat = null;
        try {
            stat = fs.statSync(imgFolder+"/"+ user.folderPath); 
        } catch (err) {
            fs.mkdirSync(imgFolder);
        }
        cb(null, imgFolder+"/"+ user.folderPath);
  });},
  filename: (req, file, cb) => {
    cb(null, file.originalname );
  }

});
//Creer un multer pour stocker et filter le bon type de image
const picto = multer({
    storage: storage, 
    limits: {
        fileSize: 1000000
    },
    fileFilter: function (req, file, cb) {
        User.findById(req.payload._id,function(err,user){
            sanitizeFile(file,user.folderPath, cb);
        })
        //Verifier les types des files(image)
    }
});

function sanitizeFile(file,folder, cb) {
    // Define the allowed extension
    let fileExts = ['png', 'jpg', 'jpeg', 'gif'];
    let check=true;
    // Check allowed extensions
    let isAllowedExt = fileExts.includes(file.originalname.split('.')[1].toLowerCase());
    // Mime type must be an image
    let isAllowedMimeType = file.mimetype.startsWith("image/");
    fs.readdirSync(imgFolder+"/"+folder, (err, files) => {
           if(err){console.log(err)};
           for (let i = 0; i < files.length; ++i) {
               if(files[i]===file){
                   check=false;
                   return cb('Error: File already exist ')
               }

              }
          });
    if(isAllowedExt && isAllowedMimeType && check){
        return cb(null ,true) // no errors
    }
    else{
        // pass error msg to callback, which can be displaye in frontend
         return cb('Error: File type not allowed!');
    }
    
               
}
module.exports = picto;