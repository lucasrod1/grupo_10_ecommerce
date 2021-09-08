const mainController = require('../controllers/mainController');
const express = require('express');
const router = express.Router();

router.get('/', mainController.home);
router.get('/login', mainController.login);
router.get('/register', mainController.register);
router.get('/products/detail', mainController.productDetail);
router.get('/cart', mainController.cart);

module.exports = router;