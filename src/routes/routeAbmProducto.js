const controllerEdicionProducto = require('../controllers/controllerEdicionProducto');
const express = require('express');
const router = express.Router();

router.get('/', controllerEdicionProducto.lista);
router.put('/edit', controllerEdicionProducto.edit);

router.get('/lista', controllerEdicionProducto.lista);
router.get('/lista/:id', controllerEdicionProducto.uniq);

module.exports = router;