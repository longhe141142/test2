const multer = require("multer");

const path = require("path");
// const imageStorage = multer.diskStorage({
//     // Destination to store image     
//     destination: '../images', 
//       filename: (req, file, cb) => {
//           cb(null, file.fieldname + '_' + Date.now() 
//              + path.extname(file.originalname))
//             // file.fieldname is name of the field (image)
//             // path.extname get the uploaded file extension
//     }
// });

const { mkdirSync, deleFIle } = require("./file_interact")
const pathdir = path.resolve(__dirname,"../")



mkdirSync(pathdir+"/uploads")
var imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.png') //Appending .jpg
  }
})



const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 


module.exports = { 
  uploadSingle: imageUpload.single('image'),
  UploadMultil :imageUpload.array('images')

}