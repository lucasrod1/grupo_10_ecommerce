const express = require('express');
const router = express.Router();
const path = require('path');
const controllerApi = require('../controllers/controllerApi');
const fs = require('fs');

router.get('/users', controllerApi.users);
router.get('/users/:id', controllerApi.byUserId);
router.get('/products', controllerApi.products);
// router.get('/users/:id', controllerApi.byUserId);
// router.post('/login', userValidator.login, usersController.loginValidation);
// router.post('/logout', usersController.logout);
// router.get('/register', usersController.register);
// router.delete('/delete', usersController.delete)

module.exports = router;