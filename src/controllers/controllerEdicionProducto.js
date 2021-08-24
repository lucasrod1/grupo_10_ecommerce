const path = require('path')
const fs = require('fs');
const jsonFileRead = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')

function productos(){
    return JSON.parse(jsonFileRead)
}

const mainController = {
    formulario: function (req, res) {
        res.render('editProducto.ejs')
    },
    edit: (req, res) => {
        console.log(req.body)
    }
}
module.exports = mainController;