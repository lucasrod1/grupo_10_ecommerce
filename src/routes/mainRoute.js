const mainController = require('../controllers/mainController');
const express = require('express');
const router = express.Router();
const loginValidate = require('../middlewares/loginValidate');


router.get('/', mainController.home);
router.get('/login', loginValidate.profile, mainController.login);
router.get('/register', mainController.register);
router.get('/products/detail', mainController.productDetail);
router.get('/cart', loginValidate.cart, mainController.cart);
router.get('/src/views/aboutUs.ejs', mainController.aboutUs);

module.exports = router;