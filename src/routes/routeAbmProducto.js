const controllerEdicionProducto = require('../controllers/controllerEdicionProducto');
const express = require('express');
const router = express.Router();

//Visualizacion de productos
router.get('/lista', controllerEdicionProducto.lista);
router.get('/lista/:id', controllerEdicionProducto.uniq);

//Edicion de producto
router.put('/edit', controllerEdicionProducto.edit);
router.delete('/delete/:id', controllerEdicionProducto.delete);

module.exports = router;