/**
 * Created by larry Eliemenye
 */
var passport = require('passport');
var GitHubStrategy = require('passport-github2');
var UserModel = require('../models/Users');
//strategy Verifier
var GitHubStrategyVerifier = function(accessToken, refreshToken, profile, done){
    console.log(accessToken, refreshToken, profile, done);
    done();
};

passport.serializeUser(function(User, done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    done(null, id);
});
passport.use(new GitHubStrategy({
    clientID:"e01f2f619404203497dd",
    clientSecret:"f4460eeb2d67d508d6120f9b67460f23c28bb8bc",
    callbackURL:"http://localhost:3000/auth/callback"
}, GitHubStrategyVerifier));

module.exports = passport;