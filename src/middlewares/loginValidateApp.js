const path = require('path');
const fs = require('fs');

//Funcion para poder listar usuarios
function userList() {
    let jsonFileRead = fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8')
    return JSON.parse(jsonFileRead)
}

function userLogged(req, res, next) {
    let usersDb = userList();
    res.locals.islogged = false;

    if(req.cookies.user){
        // console.log(req.cookies)
        let userValidated = usersDb.find( usuario => {
            return req.cookies.user == usuario.email;
        })
        req.session.user = userValidated.email;
        req.session.avatar = userValidated.avatarImage;
        }

    if(req.session.user){
        // console.log(req.session)
        res.locals.islogged = true;
        res.locals.user = req.session.user;
        res.locals.avatar = req.session.avatar;
    }

    next();
}

module.exports = userLogged