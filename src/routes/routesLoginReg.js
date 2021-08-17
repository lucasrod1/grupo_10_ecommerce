const controllerOldMilano = require('../controllers/controllerOldMilano');
const express = require('express');
const router = express.Router();

router.get('/', controllerOldMilano.registrarse);

module.exports = router;