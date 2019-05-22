const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
const imgFolder =  './images';
console.log(__dirname);
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    var stat = null;
    try {
        stat = fs.statSync(imgFolder);
    } catch (err) {
        fs.mkdirSync(imgFolder);
    }
    cb(null, imgFolder);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname );
  }

});
const picto = multer({
    storage: storage, 
    limits: {
        fileSize: 1000000
    },
    fileFilter: function (req, file, cb) {
        sanitizeFile(file, cb);//Verifier les types des files(image)
    }
});

function sanitizeFile(file, cb) {
    // Define the allowed extension
    let fileExts = ['png', 'jpg', 'jpeg', 'gif'];
    let check=true;
    // Check allowed extensions
    let isAllowedExt = fileExts.includes(file.originalname.split('.')[1].toLowerCase());
    // Mime type must be an image
    let isAllowedMimeType = file.mimetype.startsWith("image/");
    fs.readdirSync(imgFolder, (err, files) => {
           if(err){console.log(err)};
           for (let i = 0; i < files.length; ++i) {
               if(files[i]===file){
                   check=false;
                   return cb('Error: File all ready existe ')
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