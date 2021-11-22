const express = require('express');
const router = express.Router();
const path = require('path');
const validateCreateForm = require('../middlewares/validateFormUserCreate')
const uploadFile = require('../middlewares/multerAbmUsers')
const userValidator = require('../middlewares/userValidator')

//Requiero el paquete para comparar las contraseñas  que tengo hash.
const bcrypt = require('bcryptjs');
//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está reistrando existe o no
const fs = require('fs');


//Requiero el paquete expres-validator
const { body } = require('express-validator');

//Requerir el modulo de los controladores
const usersController = require('../controllers/usersController');
const { BADFAMILY } = require('dns');

//Aquí aperturo mi archivo de usuarios, ya que al registrarse un usuario es conveniente buscar que no exista una ya registrado con el mismo email o id o el campo que utlicen para identificar al usuario.

let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))

//Validaciones para login A IMPLEMENTAR - No implementado.
const validateLogin = [
  body('email').notEmpty().withMessage('Debes ingresar un email valido.'),
  body('password').notEmpty().withMessage('Debes ingresar tu contraseña.'),
];

router.get('/login', usersController.login);
router.post('/login', userValidator.login, usersController.loginValidation);
router.post('/logout', usersController.logout);
router.get('/register', usersController.register);
router.post('/register/create', uploadFile.single('avatar'), userValidator.register, usersController.create);
router.get('/profile', usersController.profileUser);
router.get('/edit', usersController.edit);
router.post("/edit", uploadFile.single("avatar"), usersController.update);
router.delete('/delete', usersController.delete)

module.exports = router;