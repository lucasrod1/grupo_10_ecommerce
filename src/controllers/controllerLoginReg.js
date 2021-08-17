const path = require('path');
const controllerLoginReg = {
    registrarse: (req, res) => {
        res.render('login-registro.ejs');
    },
}

module.exports = controllerLoginReg;