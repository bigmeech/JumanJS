var passport = require('passport');

function onCallbackReturn(req, res, next) {
    res.redirect('/dashboard');
}

function getLogin(req, res, next) {
    res.render('pages/landing');
}

module.exports = function () {
    return {
        rootPath: '/auth',
        routes: [
            { path: '/github',  get: passport.authenticate('github', {scope: ['user:email']}) },
            { path: '/login', get:getLogin },
            { path: '/callback', get: [ passport.authenticate('github', {failureRedirect: '/auth/login'}), onCallbackReturn ] }
        ]
    }
}