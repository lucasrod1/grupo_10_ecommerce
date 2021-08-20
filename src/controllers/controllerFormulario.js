const path = require('path')
const mainController = {
    Formulario: function (req, res) {
        res.render('Formulario.ejs')
    },
}
module.exports = mainController;