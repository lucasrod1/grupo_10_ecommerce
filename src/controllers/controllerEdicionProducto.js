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
        db.Products.findAll({include : ["category"]})
        .then( function(products){
            res.render('productCreate/editProductoList.ejs', { products: products });
        })
    },
    //Esta es esl metodo para la vista de edicion del producto y para poder eliminarlo
    uniq: async (req, res) => {
        let product = await db.Products.findByPk(req.params.id)
        let category = await db.Category.findAll()
        console.log(category)
                res.render('productCreate/editProductoUniq.ejs', { product : product , category: category});
    },
    //Esta es es metodo que edita el proeducto que se muestra con el metodo (Uniq)
    edit: async (req, res) => {
        // De esta manera se realiza con update (PENDIENTE DE IMPLEMENTACION)
        let productInfo = await db.Products.findByPk(req.params.id)
        await db.Products.update(
            {
                name: req.body.nombre,
                description: req.body.description,
                image: req.file ? req.file.filename : productInfo.image,
                category_id: req.body.categoria,
                price: req.body.price
            },
            {
                where: { id: req.params.id}
            }
            
        )
        res.redirect('/products');
    },
    //Este es el metodo que ejecuta la eliminacion del producto, este se llama desde el boton eliminar en la seccion de edicion de 1 producto.
    delete: async (req, res) => {
        await db.Products.destroy({
                where: {
                    id: req.params.id
                }
            });
        res.redirect('/products');
    },
    //Este es el metodo para poder abrir la vista de creacion de un nuevo producto
    create: async (req, res) => {
        let categories = await db.Category.findAll();
        res.render('productCreate/editProductoCreate.ejs', {categories})
    },
    //Este es el metodo para poder crear de un nuevo producto (esta en el boton agregar producto)
    createProduct: async (req, res) => {
        await db.Products.create(
            {
                name: req.body.nombre,
                description: req.body.description,
                image: req.file ? req.file.filename : productInfo.image,
                category_id: req.body.categoria,
                price: req.body.price
            }
            )
        res.redirect('/products');
    }
}

module.exports = mainController;