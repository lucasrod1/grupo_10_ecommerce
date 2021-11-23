const db = require('../database/models')
const Op = db.Sequelize.Op;

module.exports = {
    users: async (req, res) => {
        let userList = await db.User.findAll();
        res.send(JSON.stringify(userList));
    },
    userId: async (req, res) => {
        let userId = await db.User.findOne(req.params.id)
    }
}