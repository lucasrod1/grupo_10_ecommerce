const db = require('../database/models')
const Op = db.Sequelize.Op;

module.exports = {
    men: async (req, res) => {
        let productId = await db.Products.findAll({
            where: { category_id: 2 }
        });
        console.log(productId)
        let result = {
            mensDefault: productId
        }

        res.render('../views/productsStore/men.ejs', { result })
    },
    woman: (req, res) => {
        res.render('../views/productsStore/woman.ejs')
    },
    unisex: (req, res) => {
        res.render('../views/productsStore/unisex.ejs')
    },
    accessories: (req, res) => {
        res.render('../views/productsStore/accessories.ejs')
    }
}