const db = require('../database/models')
const Op = db.Sequelize.Op;

module.exports = {
    men: async (req, res) => {
        let result = await db.Products.findAll({
            where: { category_id: 2 }, raw: true
        });
        res.render('../views/productsStore/men.ejs', { result })
    },
    woman: async (req, res) => {
        let result = await db.Products.findAll({
            where: { category_id: 1 }, raw: true
        });
        res.render('../views/productsStore/woman.ejs', { result })
    },
    unisex: async (req, res) => {
        let result = await db.Products.findAll({
            where: { category_id: 4 }, raw: true
        });
        res.render('../views/productsStore/unisex.ejs', { result })
    },
    accessories: async (req, res) => {
        let result = await db.Products.findAll({
            where: { category_id: 5 }, raw: true
        });
        res.render('../views/productsStore/accessories.ejs', { result })
    },
    uniq: async (req, res) => {
        let product = await db.Products.findByPk(req.params.id)
                res.render('../views/detallesProducto.ejs', { product : product});
    },
}