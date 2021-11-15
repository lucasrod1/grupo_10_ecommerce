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
        if(user){
            let password = await db.User.findOne({  //revisar
                where: {
                    email: user.dataValues.email
                }
            }); // revisar
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
        res.render('../views/users/registro.ejs')
        }
    },
    //Medodo renderizacion de sitio para registracion de usuario
    register: function(req,res){
        res.render('../views/users/registro.ejs');
    },
    //Medodo para registracion de usuario
    create: async (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            await db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.emailSign,
                password: passwordEncrypt(req.body.passwordSign),
                user_type_id: 3,
                avatarImage: req.file ? req.file.filename : "noavatar.png",
            })
            res.redirect('/users/login');
        }else {
            //hay que validar los datos y enviarlos a la vista nuevamente con los errores y los datos que si estan ok a sus campos enviados.
            // console.log({ errors: errors.mapped(), old: req.body } )
            // res.send({ errors: errors.mapped(), old: req.body })
            res.render('../views/users/registro.ejs', {errors: errors.mapped(), old: req.body })
        }
        
        },
    //Metodo para renderizar la pagina de Editar usuario.
    edit: function(req, res){
        res.render('../views/users/editUser.ejs');
    },
    //Metodo para editar perfil de usuario.
    update: async (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
        await db.User.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.emailSign,
            avatarImage: req.file ? req.file.filename : "noavatar.png",
          },{
              where:{
                  email: req.session.user
                }//identificar el usuario logeado
          });
          let userFound = await db.User.findByPk(req.session.user)
          req.session.user = userFound;
          res.redirect('/');
    } else { res.render('../views/users/editUser.ejs', {errors: errors.errors})};
    },
    
        //Metodo renderizado para ver el perfil Usuario 
        profileUser: async function(req,res){
            if(req.session.user){
                // console.log(req.session.user)
                // let emailUser = req.session.user;
                let user = await db.User.findOne({
                    where: {
                        email: req.session.user,
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
        // Metodo para borrar un usuario
        delete: async (req,res)=>{
            await db.User.destroy({
                where: {
                    email: req.session.user
                }
            })
            req.session.destroy();
            res.cookie('user', null, { maxAge: 1 });
            res.redirect('/');
        },
        logout: (req, res) => {
            req.session.destroy();
            res.cookie('user', null, { maxAge: 1 });
            res.redirect('/')
        }
    }
module.exports = controllersUser;