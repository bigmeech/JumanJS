var passport = require('../lib/passport');

function getIndex(req, res, next){
    console.log("rendering users");
    res.render('base');
}

function getDashboard(req, res, next){
    res.render('pages/dashboard',{
        user:req.session.passport.user
    });
}

module.exports = function () {
    return {
        rootPath: '/',
        routes:[
            { path: '/', get:[ passport.CheckAuth, getIndex ] },
            { path: '/dashboard', get:getDashboard }
        ]
    }
};