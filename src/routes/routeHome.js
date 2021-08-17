const controllerHome = require('../controllers/controllerHome');
const express = require('express');
const router = express.Router();

router.get('/', controllerHome.home);

module.exports = router;