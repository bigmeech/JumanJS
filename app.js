var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var consolidate = require("consolidate");
var path = require('canonical-path');
var routes = require('./routes/index');
var users = require('./routes/users');
var exroute = require('exroute');

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
        variableStart:'{{',
        variableEnd:'}}',
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
exroute.init(app,{
    routesDirectory:'./routes/*.js'
});


module.exports = app;
