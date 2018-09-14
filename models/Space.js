const mongoose = require('mongoose');
const spaceSchema = mongoose.Schema({
    spaceTitle: String,
    description: String,
    city: String,
    rate: Number,
    review: String
});
module.exports = mongoose.model('Space', spaceSchema);