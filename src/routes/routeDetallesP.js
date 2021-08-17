const mainController = require('../controllers/mainController');
const express = require('express');
const router = express.Router();

router.get('/', mainController.detallesProducto);

module.exports = router;