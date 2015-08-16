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
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:process.env.CALLBACK_URL
}, GitHubStrategyVerifier));

module.exports = passport;