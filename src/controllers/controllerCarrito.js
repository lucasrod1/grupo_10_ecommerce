const path = require('path')
const mainController = {
    carrito: function (req, res) {
        res.render('productCart.ejs')
    },
}
module.exports = mainController;