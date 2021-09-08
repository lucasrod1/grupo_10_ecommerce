const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');

const controllersUser = {
    login: function(req,res){
        res.render('../views/login.ejs');
    },
    register: function(req,res){
        res.render('../views/registro.ejs');
    },
}

module.exports = controllersUser;