var mongoose = require('../lib/database');
var MongooseSchema = mongoose.Schema;

var UserSchema = new MongooseSchema({
    username:String,
    email:String
});
module.exports = mongoose.model('User', UserSchema);