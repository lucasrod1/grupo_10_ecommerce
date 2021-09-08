const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');

//Funcion para poder listar usuarios
function userList() {
    let jsonFileRead = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8')
    return JSON.parse(jsonFileRead)
}
// Funcion par apoder encriptar passwords
function passwordEncrypt(password){
    return bcrypt.hashSync(password, 10);
}

const controllersUser = {
    login: function(req,res){
        res.render('../views/users/login.ejs');
    },
    register: function(req,res){
        res.render('../views/users/registro.ejs');
    },
    create: (req, res) => {
        let users = userList();
        let lastId = users.pop()
        users.push(lastId)
        console.log("aca va el body")
        console.log(req.file);
        let newUser = {
            id: lastId.id + 1,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.emailSign,
            password: passwordEncrypt(req.body.passwordSign),
            category: "user",
            avatarImage: req.file.filename
            }
        users.push(newUser)
        fs.writeFileSync(path.join(__dirname, '../data/users.json'), JSON.stringify(users, null, 2))
        res.redirect('/users/login');
        }
}
module.exports = controllersUser;