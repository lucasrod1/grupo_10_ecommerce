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
        res.redirect('/abmProductos/lista');
        console.log(req.body)
    },
    delete: (req, res) => {
        let products = productos();
        let productsItemDeleted = products.filter( item => {
            return item.id != req.params.id;
        })
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productsItemDeleted, null, 2))
        res.redirect('/abmProductos/lista');

        console.log(productsItemDeleted)
    }
}
module.exports = mainController;