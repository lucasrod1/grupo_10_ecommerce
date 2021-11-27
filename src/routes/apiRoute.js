const express = require('express');
const router = express.Router();
const path = require('path');
const controllerApi = require('../controllers/controllerApi');

//Rutas de APIs para Usuarios
router.get('/users', controllerApi.users);
router.get('/users/:id', controllerApi.byUserId);
//Rutas de APIs para productos
router.get('/products', controllerApi.products);
router.get('/products/:id', controllerApi.prouctsId);

module.exports = router;