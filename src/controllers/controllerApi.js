const db = require('../database/models')
const Op = db.Sequelize.Op;

module.exports = {
    users: async (req, res) => {
        let userList = await db.User.findAll({ attributes: { exclude: ['password', 'user_type_id', 'avatarImage'] } });
        let userCount = await db.User.count();
        let result = {
            userCount: userCount,
            userList: userList,
        }
        res.json(result);
    },
    byUserId: async (req, res) => {
        let userId = await db.User.findOne({
            where: { id: req.params.id },
            attributes: { exclude: ['password', 'user_type_id'] },
        });
        let result = {
            id: userId.dataValues.id,
            firstName: userId.dataValues.firstName,
            lastName: userId.dataValues.firstName,
            email: userId.dataValues.email,
            avatarImage: '/images/users/'+userId.dataValues.avatarImage,
        };
        console.log(result);
        res.json(result);
        },
    products: async (req, res) => {
        let productCount = await db.Products.count();
        let productCountGroupByCategory = await db.Products.count({
            include: [{ association: 'category'} ],
            group: ['category.name']
        });
        let producList = await db.Products.findAll({
            include: [{ association: 'category' }],
        });
        let result = {
        productCount: productCount,
        producCountGroupByCategory: productCountGroupByCategory,
        producList: producList,
        }
        res.json(result);
        },
    prouctsId: async (req, res) => {
        let productId = await db.Products.findOne({
            where: { id: req.params.id },
            include: [{ association: 'category' }],
        });
        console.log(productId);
        let result = {
            id: productId.dataValues.id,
            name: productId.dataValues.name,
            description: productId.dataValues.description,
            price: productId.dataValues.price,
            category: productId.dataValues.category,
            image: '/img/products/' + productId.dataValues.image,
        };
        console.log(result);
        res.json(result);
    }
    }