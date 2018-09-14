const mongoose = require('mongoose');
const homeSchema = mongoose.Schema({
    cities: Array,
    title: String,
    subTitle: String
});
module.exports = mongoose.model('Home', homeSchema);