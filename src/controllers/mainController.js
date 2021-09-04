const path = require('path')
const mainController = {
    home: function (req, res) {
        res.render('home.ejs');
    },
    register: (req, res) => {
        res.render('login-registro.ejs');
    },
    productDetail: function (req, res) {
        res.render('detallesProducto.ejs')
    },
    cart: function (req, res) {
        res.render('productCart.ejs')
    },
}

module.exports = mainController;