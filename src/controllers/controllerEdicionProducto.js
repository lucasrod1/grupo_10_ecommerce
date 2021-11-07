const path = require('path')
const fs = require('fs');
const db = require('../database/models');


//Funcion para poder llamar a los productos desde el JSON para que pueda reulizarse y hacer update en caso de que algun menotdo lo requiera.
function productos(){
    let jsonFileRead = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')
    console.log(JSON.parse(jsonFileRead))
    return JSON.parse(jsonFileRead)
}

//Funcion para listar productos utilizando Sequelize, reeemplazara la funcion anterior (LA QUE INICIA EN LINEA 7) donde se lee el archivo JSON.
function products(){
    db.Products.findAll({
    })
    .then(datos => {
        console.log(datos)
    })
}

//Controlador
const mainController = {
    //Probando findAll con la tabla de Users :) los datos salen de la funcion "products()"" de arriba.
    index: (req, res) =>{
        console.log(products())
    },
    //Este es el metodo para la vista donde se pueden ver todos los productos existentes
    lista: (req, res) => {
        let products = productos();
        res.render('productCreate/editProductoList.ejs', {products});
    },
    //Esta es esl metodo para la vista de edicion del producto y para poder eliminarlo
    uniq: (req, res) => {
        let products = productos();
        let product = products.filter( item => {
            return item.id == req.params.id;
        })
        res.render('productCreate/editProductoUniq.ejs', {product});
    },
    //Esta es es metodo que edita el proeducto que se muestra con el metodo (Uniq)
    edit: (req, res) => {
        let products = productos();
        let productEnd = products.map(function(item){
            if(item.id == req.params.id){
                item.nombre = req.body.nombre;
                item.description = req.body.description;
                if(req.file){
                    item.image = req.file.filename;
                }
                item.categoria = req.body.categoria;
                item.color = req.body.color;
                item.price = req.body.price;
                item.talla = req.body.talla;
                return item;
            }
            return item;
        })
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productEnd, null, 2))
        console.log(productEnd)

        res.redirect('/products');
    },
    //Este es el metodo que ejecuta la eliminacion del producto, este se llama desde el boton eliminar en la seccion de edicion de 1 producto.
    delete: (req, res) => {
        let products = productos();
        let productsItemDeleted = products.filter( item => {
            return item.id != req.params.id;
        })
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(productsItemDeleted, null, 2))
        res.redirect('/products');
    },
    //Este es el metodo para poder abrir la vista de creacion de un nuevo producto
    create: (req, res) => {
        let products = productos();
        res.render('productCreate/editProductoCreate.ejs')
    },
    //Este es el metodo para poder crear de un nuevo producto (esta en el boton agregar producto)
    createProduct: (req, res) => {
        console.log(req.file)
        let products = productos();
        let lastProduct = products.pop();
        products.push(lastProduct);
        console.log(req.file.filename);
        let newProduct = {
            id: lastProduct.id+1,
            nombre: req.body.nombre,
            description: req.body.description,
            image: req.file.filename,
            categoria: req.body.categoria,
            color: req.body.color,
            talla: req.body.talla,
            price: req.body.price
        }
        products.push(newProduct)
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(products, null, 2))
        res.redirect('/products');
    }
}

module.exports = mainController;