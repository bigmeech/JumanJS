var passport = require('passport');

function onCallbackReturn(req, res, next) {
    console.log('SHows a list of the users Repo Projects');
    res.json({ message:'Welcome home' });
}

function getLogin(){
    console.log('show loginPage');
    res.json({ message:'Show login Page' });
}

module.exports = function () {
    return {
        rootPath: '/auth',
        routes: [
            {
                path: '/github',
                get: passport.authenticate('github', {scope: ['user:email']})
            },
            {
                path: '/login',
                get:getLogin
            },
            {
                path: '/callback',
                get: [
                    passport.authenticate('github', {failureRedirect: '/auth/login'}),
                    onCallbackReturn
                ]
            }
        ]
    }
};