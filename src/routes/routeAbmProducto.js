const controllerEdicionProducto = require('../controllers/controllerEdicionProducto');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

//Configurando el storage para multer:
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

//Visualizacion de productos
router.get('/', controllerEdicionProducto.lista);
router.get('/:id/edit', controllerEdicionProducto.uniq);
router.get('/create', controllerEdicionProducto.create);

//Edicion de producto
router.put('/:id', uploadFile.single('image'), controllerEdicionProducto.edit);
router.delete('/:id', controllerEdicionProducto.delete);

//Creacion de productos
router.post('/', uploadFile.single('image'), controllerEdicionProducto.createProduct);

module.exports = router;