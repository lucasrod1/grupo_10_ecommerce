const path = require('path')
const mainController = {
    home: function (req, res) {
        res.render('home.ejs');
    },
    register: (req, res) => {
        res.render('registro.ejs');
    },
    login: function (req, res) {
        res.render('login.ejs')
    },
    productDetail: function (req, res) {
        res.render('detallesProducto.ejs')
    },
    cart: function (req, res) {
        res.render('productCart.ejs')
    },
    aboutUs: function (req, res) {
        res.render ('aboutUs.ejs')
    },
}

module.exports = mainController;