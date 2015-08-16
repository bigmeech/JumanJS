var passport = require('../lib/passport');

function getIndex(req, res, next){
    console.log("rendering users");
    res.render('base');
}

function getDashboard(req, res, next){
    res.render('pages/dashboard');
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