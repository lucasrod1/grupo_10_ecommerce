const loginValidate = {
    cart: (req, res, next) => {
    if(req.session.user){
        next();
    }else{
        res.redirect('/users/login')
    }
    },
    profile: (req, res, next) => {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/user/profile')
        }
    }

}

module.exports = loginValidate