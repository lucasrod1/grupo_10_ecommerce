const express = require('express');
const router = express.Router();
const path = require('path');
const controllerProductsStore = require('../controllers/controllerProductsStore');

//Rutas Get para categorias hombre y mujer
router.get('/men', controllerProductsStore.men);
router.get('/men/:id', controllerProductsStore.men);
router.get('/woman', controllerProductsStore.woman);
router.get('/woman/:id', controllerProductsStore.woman);
router.get('/kids', controllerProductsStore.kids);
router.get('/kids/:id', controllerProductsStore.kids);
router.get('/unisex', controllerProductsStore.unisex);
router.get('/unisex/:id', controllerProductsStore.unisex);




module.exports = router;