const controllerFormulario= require('../controllers/controllerFormulario');
const express = require('express');
const router = express.Router();

router.get('/', controllerFormulario.Formulario);

module.exports = router;