const controllerDetallesP = require('../controllers/controllerDetallesP');
const express = require('express');
const router = express.Router();

router.get('/', controllerDetallesP.detallesProducto);

module.exports = router;