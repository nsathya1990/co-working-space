const mongoose = require('mongoose');
const blogSchema = mongoose.Schema({
    blogTitle: String,
    description: String,
    createdAt: Date,
    modifiedAt: Date,
    tag: Array
});
module.exports = mongoose.model('Blog', blogSchema);