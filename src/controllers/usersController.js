const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const Op = db.Sequelize.Op;

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
    loginValidation: async (req, res) => {
        let user = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });
        // console.log(user)
        if(user){
            let password = await db.User.findOne({
                where: {
                    email: user.dataValues.email
                }
            });
            console.log(password)

            // console.log(user)
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.user = req.body.email;
                req.session.avatar = user.avatarImage;
                if (req.body.remember == 'on') {
                    res.cookie('user', req.body.email, { maxAge: (1000 * 60) * 10 })
                }
                return res.redirect('profile')
            } else {
                res.render('../views/users/login.ejs')
            }
        }
        else{
            console.log("no hay usuario");
        res.render('../views/users/registro.ejs')
        }
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
            console.log(req.cookies.user)
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
        logout: (req, res) => {
            req.session.destroy();
            res.cookie('user', null, { maxAge: 1 });
            res.redirect('/')
        }
    }
module.exports = controllersUser;