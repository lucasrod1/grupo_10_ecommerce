const mainController = require('../controllers/mainController');
const express = require('express');
const router = express.Router();
const acceso = require('../middlewares/acceso');


router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/products/detail', mainController.productDetail);
router.get('/cart', acceso, mainController.cart);

module.exports = router;