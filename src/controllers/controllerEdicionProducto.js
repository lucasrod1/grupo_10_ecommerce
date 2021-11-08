const path = require('path')
const fs = require('fs');
const db = require('../database/models');
const Op = db.Sequelize.Op;


//Funcion para poder llamar a los productos desde el JSON para que pueda reulizarse y hacer update en caso de que algun menotdo lo requiera.
function productos(){
    let jsonFileRead = fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8')
    console.log(JSON.parse(jsonFileRead))
    return JSON.parse(jsonFileRead)
}

//Controlador
const mainController = {
    // ESTE ES UN ELEMENTO DE PRUEBA - Probando findAll con la tabla de Users :) los datos salen de la funcion "products()"" de arriba.
    index: (req, res) =>{
        console.log(products())
    },
    //Este es el metodo para la vista donde se pueden ver todos los productos existentes
    lista: (req, res) => {
        db.Products.findAll()
        .then( function(products){
            res.render('productCreate/editProductoList.ejs', { products: products });
        })
    },
    //Esta es esl metodo para la vista de edicion del producto y para poder eliminarlo
    uniq: async (req, res) => {
        db.Products.findByPk(req.params.id)
            .then(function (product){
                res.render('productCreate/editProductoUniq.ejs', { product : product});
                // console.log(product)
            });
    },
    //Esta es es metodo que edita el proeducto que se muestra con el metodo (Uniq)
    edit: (req, res) => {
        //De esta manera se realiza con update (PENDIENTE DE IMPLEMENTACION)
        // db.Products.update(
        //     {
        //         name: req.body.nombre,
        //         description: req.body.description,
        //         image: req.file.filename,
        //         category_id: req.body.categoria,
        //         price: req.body.price
        //     },
        //     {
        //         where: { id: req.params.id}
        //     }
            
        // )

        // De esta manera debiamos realizarlo con el archivo JSON:
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