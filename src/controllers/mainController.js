const path = require('path')
const mainController = {
    home: function(req,res) {
        /* res.sendFile(path.join(__dirname,'../view/home.html')); */
        res.render('home.ejs');
    },
    detallesProducto: function (req, res) {
        /* res.sendFile(path.join(__dirname,'../view/detallesProducto.html')); */
        res.render('detallesProducto.ejs')
    },
}
module.exports = mainController;