const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: Array,
    eMailId: String,
    password: String,
    facebook: String,
    twitter: String,
    instagram: String
});
module.exports = mongoose.model('User', userSchema);