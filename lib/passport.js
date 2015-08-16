/**
 * Created by larry Eliemenye
 */
var passport = require('passport');
var GitHubStrategy = require('passport-github2');
var UserModel = require('../models/Users');
//strategy Verifier
var GitHubStrategyVerifier = function(accessToken, refreshToken, profile, done){
    console.log(accessToken, refreshToken, profile, done);

    //check if user has joined already
    UserModel.findOne({
        username:profile.username,
        email:profile.emails[0].value.toLowerCase()
    }, function(err, User){

        //if err during check, display error
        if(err) return done(err, null);

        //if user doesnt exist, add the user
        if(!User){
            var newUser = new UserModel();
            newUser.username = profile.username;
            newUser.email = profile.emails[0].value.toLowerCase();
            newUser.userId = profile.id;
            newUser.save(function(err, User){
                if(err) return done(err, null);
                return done(null, User);
            })
        }

        //if user already exisit, just redirect to the main application page
        if(User) return done(null, User);
    });
};

passport.serializeUser(function(User, done){
    done(null, User.userId)
});

passport.deserializeUser(function(id, done){
    done(null, id);
});
passport.use(new GitHubStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    callbackURL:process.env.CALLBACK_URL
}, GitHubStrategyVerifier));

exports.Passport = passport
exports.CheckAuth = function CheckAuth(req, res, next){
    console.log('Ensuring user is authenticated');
    next()
};
