const controllerEdicionProducto = require('../controllers/controllerEdicionProducto');
const express = require('express');
const router = express.Router();
const path = require('path');
const uploadFile = require('../middlewares/multerAbmProduct');

//Visualizacion de productos
router.get('/', controllerEdicionProducto.lista);
router.get('/index', controllerEdicionProducto.index);
router.get('/:id/edit', controllerEdicionProducto.uniq);
router.get('/create', controllerEdicionProducto.create);

//Edicion de producto
router.put('/:id', uploadFile.single('image'), controllerEdicionProducto.edit);
router.delete('/:id', controllerEdicionProducto.delete);

//Creacion de productos
router.post('/', uploadFile.single('image'), controllerEdicionProducto.createProduct);

module.exports = router;