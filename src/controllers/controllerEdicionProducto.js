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
        res.render('productCreate/editProductoUniq.ejs', {product});
    },
    edit: (req, res) => {
        console.log(req.body)
        let products = productos();
        let productEnd = products.map(function(item){
            if(item.id == req.params.id){
                item.nombre = req.body.nombre;
                item.description = req.body.description;
                item.imagen = req.body.imagen;
                item.categoria = req.body.categoria;
                item.color = req.body.color;
                item.price = req.body.price;
                item.talla = req.body.talla;
            }
            return item;
        })
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productEnd, null, 2))
        console.log(productEnd)

        res.redirect('/products');
    },
    delete: (req, res) => {
        let products = productos();
        let productsItemDeleted = products.filter( item => {
            return item.id != req.params.id;
        })
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productsItemDeleted, null, 2))
        res.redirect('/products');
    }
}

module.exports = mainController;