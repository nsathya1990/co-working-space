const Blog = require('../models/Blog');

exports.getBlogs = function(req, res) {
    Blog.find().exec(function(error, blog) {
        if (error) {
            throw err;
        }
        if(blog) {
            console.log("Data found.");
            res.json({
                data: blog
            }) ;
        }
        else {
            console.log("No Data have been found.");
            res.json({
                message: "No Data have been found."
            });
        }
    });
};

exports.postBlog = function(req, res) {
    console.log(req.body);
    var blog = new Blog ({
        blogTitle: req.body.blogTitle,
        description: req.body.description,
        createdAt: req.body.createdAt,
        modifiedAt: req.body.modifiedAt,
        tag: req.body.tag
    });
    blog.save().then(function(newBlog) {
        res.json({
            data: req.body
        });
    });
}

exports.putUpdateBlog = function(req, res) {
    console.log("ID of the document to be updated:", req.params.id);
    console.log("Body: ", req.body);
    console.log("req.body.data.tag: ", req.body.data.tag);

    Blog.updateOne({ _id: req.params.id }, {
        tag: req.body.data.tag,
        modifiedAt: req.body.data.modifiedAt
    }, {}, function (err, doc) {
        console.log("doc.nModified: ", doc.nModified);
        if (err) {
            throw err;
        }
        if(doc) {
            res.json({
                data: doc
            }) ;
        }
        else {
            res.json({
                message: "No Data were updated."
            });
        }
      });
}

exports.deleteRemoveBlog = function (req, res) {
    console.log("ID of the document to be deleted: ", req.params.id);
    Blog.deleteOne({ _id: req.params.id }, function (err, doc) {
        if (err) {
            throw err;
        }
        if (doc) {
            res.json({
                data: req.params.id,
                message: "Record deleted"
            });
        }
        else {
            res.json({
                message: "No record were deleted."
            });
        }
    });
} 