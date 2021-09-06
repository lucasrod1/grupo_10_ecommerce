const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const { body } = require('express-validator')

//Validaciones para registro
const validateCreateForm = [
    body('fistName').notEmpty().withMessage('Debes completar el campo de nombre.'),
    body('lastName').notEmpty().withMessage('Debes completar el campo de apellido.'),
    body('emailSign').isEmail().withMessage('Debes completar un email valido.')
];


const controllersUser = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/users/login-registro'));
    },
    registro: function(req,res){
        res.render(path.resolve(__dirname, '../views/users/login-registro'));
    },

}
module.exports = controllersUser;