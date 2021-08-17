const controllerCarrito = require('../controllers/controllerCarrito');
const express = require('express');
const router = express.Router();

router.get('/', controllerCarrito.carrito);

module.exports = router;