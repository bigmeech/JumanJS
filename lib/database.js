/**
 * Created by larry Eliemenye
 */

var mongoose = require('mongoose');
var config = require('../config');
var curEnv = process.env.ENV;
var connectionString = "mongodb://" + config.database[curEnv].host + ":" + config.database[curEnv].port + "/" + config.database[curEnv].name;

mongoose.connect(connectionString);
dbcon = mongoose.connection;

dbcon.on('error', function (error) {
    console.log('Error connecting Mongo DB: ' + error.message);
});
mongoose.set('debug', true);
module.exports = mongoose;