const path = require('path');
const controllerOldMilano = {
    carrito: function(req, res){
        res.render('productCart.ejs')
    },
    registrarse: (req, res) => {
        res.render('login-registro.ejs');
    },
}

module.exports = controllerOldMilano;