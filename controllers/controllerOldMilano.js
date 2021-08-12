const path = require('path');
const controllerOldMilano = {
    carrito: function(req, res){
        res.sendFile(path.join(__dirname, '../view/productCart.html'));
    },
}

module.exports = controllerOldMilano;