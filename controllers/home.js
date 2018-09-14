const Home = require('../models/Home');

exports.getHome = function(req, res) {
    Home.find().exec(function(error, home) {
        if (error) {
            throw err;
        }
        if(home) {
            console.log("Data found.");
            res.json({
                data: home
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

exports.postHome = function(req, res) {
    console.log(req.body);
    var home = new Home ({
        cities: req.body.cities,
        title: req.body.title,
        subTitle: req.body.subTitle
    });
    home.save().then(function(newHome) {
        res.json({
            data: req.body
        });
    });
}

exports.putUpdateHome = function(req, res) {
    console.log("ID of the document to be updated:", req.params.id);
    console.log("Body: ", req.body);
    console.log("req.body.data.budget: ", req.body.data.budget);

    Home.updateOne({ _id: req.params.id }, {
        cities: req.body.data.cities
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

exports.deleteRemoveHome = function (req, res) {
    console.log("ID of the document to be deleted: ", req.params.id);
    Home.deleteOne({ _id: req.params.id }, function (err, doc) {
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