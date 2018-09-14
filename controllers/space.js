const Space = require('../models/Space');

exports.getSpace = function(req, res) {
    Space.find().exec(function(error, space) {
        if (error) {
            throw err;
        }
        if(space) {
            console.log("Data found.");
            res.json({
                data: space
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

exports.postSpace = function(req, res) {
    console.log(req.body);
    var space = new Space ({
        spaceTitle: req.body.spaceTitle,
        description: req.body.description,
        city: req.body.city,
        rate: req.body.rate,
        review: req.body.review
    });
    space.save().then(function(newSpace) {
        res.json({
            data: req.body
        });
    });
}

exports.putUpdateSpace = function(req, res) {
    console.log("ID of the document to be updated:", req.params.id);
    console.log("Body: ", req.body);

    Space.updateOne({ _id: req.params.id }, {
        city: req.body.data.city,
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

exports.deleteRemoveSpace = function (req, res) {
    console.log("ID of the document to be deleted: ", req.params.id);
    Space.deleteOne({ _id: req.params.id }, function (err, doc) {
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