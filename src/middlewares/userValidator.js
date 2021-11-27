const { body } = require('express-validator');
const bcrypt = require('bcryptjs')
const db = require('../database/models');
const path = require('path');
// const { promiseImpl } = require('ejs');

const userValidator = {
    login: [
    body('email').notEmpty().withMessage('Debes ingresar un email válido.')
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
    ],
    register: [
        body('firstName').notEmpty().withMessage('Debes escribir tu nombre.').isLength({min: 2}).withMessage('El nombre debe tener un minimo de 2 caracteres'),
        body('lastName').notEmpty().withMessage('Debes escribir tu apellido.').isLength({min: 2}).withMessage('Su apellido debe tener un minimo de 2 caracteres'),
        body('emailSign').notEmpty().withMessage('Debes ingresar un email válido.').bail().isEmail().withMessage('Debes ingresar un email válido.')
        .custom(function(value) {
            return db.User.findOne(
                {
                    where: {
                        email: value
                    }
                }
                ).then(user => {
                    if(user){
                        return Promise.reject("Este e-mail se encuentra en uso")
                    }
                })
        }),
        body('avatar').custom(function(value, {req}){
            let allowedImages = ['.JPG', '.jpg', '.png', '.PNG', '.jpeg', '.JPEG', '.gif', '.GIF'];
            let imageType = path.extname(req.file.originalname);
            console.log(imageType)
            return allowedImages.includes(imageType);
        }).withMessage("Los siguientes formatos son admitidos: JPG, PNG, JPEG, GIF"),
        body('passwordSign').notEmpty().withMessage('Debes escribir una contraseña.').isLength({min: 2}).withMessage('Ingrese una contraseña con un minimo de 2 caracteres'),
        body('passwordValid').notEmpty().withMessage('Debes confirmar tu contraseña.').isLength({ min: 2 }).withMessage('Ingrese una contraseña con un minimo de 2 caracteres'),
    ]

    }


  module.exports = userValidator;