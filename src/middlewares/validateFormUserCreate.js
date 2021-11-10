const { body } = require('express-validator');

const validateCreateForm = [
    body('firstName').notEmpty().withMessage('Debes escribir tu nombre.'),
    body('lastName').notEmpty().withMessage('Debes escribir tu apellido.'),
    body('emailSign').notEmpty().withMessage('Debes escribir tu dirección de e-mail.').bail().isEmail().withMessage('Debes escribir un email valido.'),
    body('emailValid').notEmpty().withMessage('Debes escribir tu dirección de e-mail.').bail().isEmail().withMessage('Debes escribir un email valido.'),
    body('passwordSign').notEmpty().withMessage('Debes escribir una contraseña.'),
    body('passwordValid').notEmpty().withMessage('Debes confirmar tu contraseña.'),
    // body('avatar').custom((value, { req }) => {
    //     let file = req.file;
    //     if (!file) {
    //         throw new Error('Por favor seleccione su imagen')
    //     }
    //     return true;
    // })
];

module.exports = validateCreateForm;