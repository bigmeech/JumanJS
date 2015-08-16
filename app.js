var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var consolidate = require("consolidate");
var path = require('canonical-path');
var exroute = require('exroute');
var session = require('express-session');
var passport = require('./lib/passport').Passport;

var app = express();
// view engine setup
var templatePath = path.join(__dirname, 'views');
app.engine('html', consolidate.nunjucks);
app.set('views', templatePath);
app.set('view engine', 'html');

nunjucks.configure(templatePath,{
    autoescape:true,
    express:app,
    tags:{
        blockStart:'{%',
        blockEnd:'%}',
        variableStart:'{#',
        variableEnd:'#}',
        commentStart:'{#',
        commentEnd:'#}'
    }
});


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret:"kitty-catty",
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
exroute.init(app,{
    routesDirectory:'./routes/*.js'
});


module.exports = app;
