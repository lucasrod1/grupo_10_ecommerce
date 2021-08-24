const controllerEdicionProducto = require('../controllers/controllerEdicionProducto');
const express = require('express');
const router = express.Router();

//Visualizacion de productos
router.get('/', controllerEdicionProducto.lista);
router.get('/:id/edit', controllerEdicionProducto.uniq);

//Edicion de producto
router.put('/:id', controllerEdicionProducto.edit);
router.delete('/:id', controllerEdicionProducto.delete);

module.exports = router;