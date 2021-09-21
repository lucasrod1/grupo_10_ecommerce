function userLogged(req, res, next) {
    // res.locals.islogged = false;

    // console.log(req.cookies.user)

    // if(req.cookies){
    //     req.locals.user = res.cookies
    // }

    if(req.session.user){
        // console.log(req.session)
        // res.locals.islogged = true;
        res.locals.user = req.session.user;
        res.locals.avatar = req.session.avatar;
    }

    next();
}

module.exports = userLogged