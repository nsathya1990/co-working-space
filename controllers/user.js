const User = require('../models/User');

exports.getAllUsers = function(req, res) {
    User.find().exec(function(error, user) {
        if (error) {
            throw err;
        }
        if(user) {
            console.log("Data found.");
            res.json({
                data: user
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

exports.postUser = function(req, res) {
    console.log(req.body);
    var user = new User ({
        name: req.body.name,
        eMailId: req.body.eMailId,
        password: req.body.password,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram
    });
    user.save().then(function(newUser) {
        res.json({
            data: req.body
        });
    });
}

exports.putUpdateUser = function(req, res) {
    console.log("ID of the document to be updated:", req.params.id);
    console.log("Body: ", req.body);

    User.updateOne({ _id: req.params.id }, {
        eMailId: req.body.eMailId,
        password: req.body.password,
        facebook: req.body.facebook,
        twitter: req.body.twitter,
        instagram: req.body.instagram
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

exports.deleteRemoveUser = function (req, res) {
    console.log("ID of the document to be deleted: ", req.params.id);
    User.deleteOne({ _id: req.params.id }, function (err, doc) {
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