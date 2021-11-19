const path = require('path');
const multer = require('multer');
const { S_IFCHR } = require('constants');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
        cb(null, "foto" + "-" + Date.now() + path.extname(file.originalname));
    }
})

const uploadFile = multer({ storage, fileFilter: function(req, file, cb) {
    let allowedImages = ['.JPG', '.jpg', '.png', '.PNG', '.jpeg', '.JPEG', '.gif', '.GIF'];
    let imageType = path.extname(file.originalname);
    let imageResult = allowedImages.includes(imageType);
    if(!imageResult){
        req.file = file
    }
    cb(null, imageResult)
} })

module.exports = uploadFile;