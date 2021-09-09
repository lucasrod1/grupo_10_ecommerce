const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

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
        let errors = validationResult(req);
        if(errors.isEmpty()){
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
            res.redirect('/');
        }else {
            //hay que validar los datos y enviarlos a la vista nuevamente con los errores y los datos que si estan ok a sus campos enviados.
            // console.log({ errors: errors.mapped(), old: req.body } )
            // res.send({ errors: errors.mapped(), old: req.body })
            res.render('../views/users/registro.ejs', {errors: errors.mapped(), old: req.body })
        }
        
        }
}
module.exports = controllersUser;