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
        res.send(JSON.stringify(result));
    },
    byUserId: async (req, res) => {
        let userId = await db.User.findOne({
            where: { id: req.params.id },
            attributes: { exclude: ['password', 'user_type_id'] },
        })
        // console.log(resultJson)
        // res.send(JSON.stringify(result));
    }
}