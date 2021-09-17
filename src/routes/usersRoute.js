const express = require('express');
const router = express.Router();
const path = require('path');

//Requiero el paquete para comparar las contraseñas  que tengo hash.
const bcrypt = require('bcryptjs');
//Requiero fs ya que debo leer el archivo json de usuarios y verificar si el usuario que se está reistrando existe o no
const fs = require('fs');
//Requiero Multer, ya que voy a permitir que el usuario que se registre suba su avatar
const multer = require('multer');

//Requiero el paquete expres-validator
const { body } = require('express-validator');

//Requerir el modulo de los controladores
const usersController = require('../controllers/usersController');
const { BADFAMILY } = require('dns');

//Aquí aperturo mi archivo de usuarios, ya que al registrarse un usuario es conveniente buscar que no exista una ya registrado con el mismo email o id o el campo que utlicen para identificar al usuario.

let archivoUsuarios =  JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/users.json')))


//Validaciones para registro
const validateCreateForm = [
    body('firstName').notEmpty().withMessage('Debes escribir tu nombre.'),
    body('lastName').notEmpty().withMessage('Debes escribir tu apellido.'),
    body('emailSign').notEmpty().withMessage('Debes escribir tu dirección de e-mail.').bail().isEmail().withMessage('Debes escribir un email valido.'),
    body('emailValid').notEmpty().withMessage('Debes escribir tu dirección de e-mail.').bail().isEmail().withMessage('Debes escribir un email valido.'),
    body('passwordSign').notEmpty().withMessage('Debes escribir una contraseña.'),
    body('passwordValid').notEmpty().withMessage('Debes confirmar tu contraseña.'),
    body('avatar').custom((value, { req }) => {
      let file = req.file;
      if(!file){
        throw new Error('Por favor seleccione su imagen')
      }
      return true;
    })
];

//Validaciones para login
const validateLogin = [
  body('email').notEmpty().withMessage('Debes ingresar un email valido.'),
  body('password').notEmpty().withMessage('Debes ingresar tu contraseña.'),
];

//Aca va la informacion del storage para guardar las imagenes del usuario
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: function (req, file, cb) {
      cb(null, "foto" + "-" + Date.now()+ path.extname(file.originalname));      
    }
  })

const uploadFile= multer({ storage })

router.get('/login', usersController.login);
router.post('/login', usersController.loginValidation);
router.post('/logout', usersController.logout);
router.get('/register', usersController.register);
router.post('/register/create', uploadFile.single('avatar'), validateCreateForm, usersController.create);
router.get('/profile', usersController.profileUser);

module.exports = router;