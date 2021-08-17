const controllerLoginReg = require('../controllers/controllerLoginReg');
const express = require('express');
const router = express.Router();

router.get('/', controllerLoginReg.registrarse);

module.exports = router;