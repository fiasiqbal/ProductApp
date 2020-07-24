const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema ({
    first_name: String,
    last_name: String,
    email : String,
    password : String
});

var Userdata = mongoose.model('user', NewUserSchema);

module.exports = Userdata;