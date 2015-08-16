/**
 * Created by larry Eliemenye
 */

var mongoose = require('mongoose');
var config = require('../config');
var connectionString = "mongodb://" + config.database['local'].host + ":" + config.database['local'].port + "/" + config.database['local'].name;

mongoose.connect(connectionString);
dbcon = mongoose.connection;

dbcon.on('error', function (error) {
    console.log('Error connecting Mongo DB: ' + error.message);
});
mongoose.set('debug', true);
module.exports = mongoose;