const path = require('path')
const fs = require('fs');

function productos(){
    let jsonFileRead = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')
    return JSON.parse(jsonFileRead)
}

const mainController = {
    lista: (req, res) => {
        let products = productos();
        res.render('productCreate/editProductoList.ejs', {products});
    },
    uniq: (req, res) => {
        let products = productos();
        let product = products.filter( item => {
            return item.id == req.params.id;
        })
        // console.log(product)
        res.render('productCreate/editProductoUniq.ejs', {product});
    },
    edit: (req, res) => {
        console.log(req.body)
    }
}
module.exports = mainController;