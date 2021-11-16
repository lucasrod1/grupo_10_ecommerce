const { body } = require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models');
const { promiseImpl } = require('ejs');

const userValidator = {
    login: [
    body('email').notEmpty().withMessage('Debes ingresar un email valido.')
    .custom(function (value, {req,}){
        return db.User.findOne({
            where: {
                email: value
            }
        }).then(user=> {
            if( !user){
                return Promise.reject("Usuario o Contraseña Invalidos")
            }
            if (!bcrypt.compareSync(req.body.password, user.password)){
                return Promise.reject("Usuario o Contraseña Invalidos")
                
            }
        })
        ''
    }),
    body('password').notEmpty().withMessage('Debes ingresar tu contraseña.')
  ]}


  module.exports = userValidator;