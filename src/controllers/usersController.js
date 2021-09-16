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
    //Medodo renderizacion de sitio para validacion de usuario
    login: function(req,res){
        res.render('../views/users/login.ejs');
    },
    //Medodo para validacion de usuario
    loginValidation: (req, res) => {
        let userLista = userList();
        userLista.forEach(user => {
            if(user.email == req.body.email){
                if(bcrypt.compareSync(req.body.password, user.password)){
                    req.session.user = req.body.email;
                    req.session.avatar = user.avatarImage;
                    return res.redirect('profile')
                }else{
                    return res.render('../views/users/login.ejs')
                }
            }
        });
        res.render('../views/users/registro.ejs')
    },
    //Medodo renderizacion de sitio para registracion de usuario
    register: function(req,res){
        res.render('../views/users/registro.ejs');
    },
    //Medodo para registracion de usuario
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
            res.redirect('/users/login');
        }else {
            //hay que validar los datos y enviarlos a la vista nuevamente con los errores y los datos que si estan ok a sus campos enviados.
            // console.log({ errors: errors.mapped(), old: req.body } )
            // res.send({ errors: errors.mapped(), old: req.body })
            res.render('../views/users/registro.ejs', {errors: errors.mapped(), old: req.body })
        }
        
    },
    //metodo renderizado para ver el perfil Usuario 
    profileUser: function(req,res){
        if(req.session.user){
             let emailUser = req.session.user;   
             let fileUsers = userList();
               let user = fileUsers.find((fileUser)=> {
                   if(emailUser == fileUser.email){
                    return fileUser;
                   }           
               })
                res.render('../views/users/profileUser.ejs',{
                email: user.email,
                nombre: user.firstName,
                apellido: user.lastName,
                avatar: user.avatarImage
            });
        }else{
         res.render('../views/users/registro.ejs');   
        }
        
    },
}
module.exports = controllersUser;