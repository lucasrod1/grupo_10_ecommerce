//Configurando el storage para multer:
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        let folder = path.join(__dirname, '../../public/img/products');
        callBack(null, folder);
    },
    filename: (req, file, callBack) => {
        let imageName = file.fieldname + "-" + req.body.nombre + "-" + Date.now() + path.extname(file.originalname)
        callBack(null, imageName)
    }
})

const uploadFile = multer({ storage });

module.exports = uploadFile;