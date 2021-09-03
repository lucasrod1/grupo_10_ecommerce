const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');


const controllersUser = {
    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/users/login-registro'));
    },
    registro: function(req,res){
        res.render(path.resolve(__dirname, '../views/users/login-registro'));
    },

}
module.exports = controllersUser;