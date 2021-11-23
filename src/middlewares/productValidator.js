const { body } = require('express-validator');
const db = require('../database/models');
const path = require('path');

const productValidator = {
    product: [
        body('nombre').notEmpty().withMessage('Debes escribir un nombre.').isLength({ min: 5 }).withMessage("El nombre debe contener al menos 5 caracteres"),
        body('description').notEmpty().withMessage('Debes completar la descripcion.').isLength({ min: 20 }).withMessage("La descripcion debe contener al menos 20 caracteres"),
        body('imagenProducto').custom(function (value, { req }) {
            let allowedImages = ['.JPG', '.jpg', '.png', '.PNG', '.jpeg', '.JPEG', '.gif', '.GIF'];
            let imageType = path.extname(req.file.originalname);
            // console.log(imageType)
            return allowedImages.includes(imageType);
        }).withMessage("Los siguientes formatos son admitidos: jpg, png, jpeg, gif"),
        body('categoria').notEmpty().withMessage("Debe seleccionar una opcion"),
        body('price').notEmpty().withMessage('Ingrese un monto en Pesos Argentinos - Revisar dolar blue'),
    ]
}

module.exports = productValidator;