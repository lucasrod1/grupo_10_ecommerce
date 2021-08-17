const path = require('path')
const mainController = {
    detallesProducto: function (req, res) {
        /* res.sendFile(path.join(__dirname,'../view/detallesProducto.html')); */
        res.render('detallesProducto.ejs')
    },
}
module.exports = mainController;