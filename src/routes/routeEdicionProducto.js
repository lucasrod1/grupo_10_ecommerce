const controllerEdicionProducto = require('../controllers/controllerEdicionProducto');
const express = require('express');
const router = express.Router();

router.get('/', controllerEdicionProducto.formulario);
router.put('/edit', controllerEdicionProducto.edit);

module.exports = router;