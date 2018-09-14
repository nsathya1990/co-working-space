const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const homeController = require('./controllers/home');
const blogController = require('./controllers/blog');

mongoose.connect("mongodb://localhost:27017/quora");
mongoose.connection.on('error', function() {
    console.log('Error while connecting to MongoDB');
});
mongoose.connection.on('open', function() {
    console.log('Connected to MongoDB');
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('Hello Quora');
});
app.get('/api/home', homeController.getHome); //retrieve all movies using GET
app.post('/api/home', homeController.postHome); //create record for a movie using POST
app.put('/api/home/:id', homeController.putUpdateHome); //update a record using PUT
app.delete('/api/home/:id', homeController.deleteRemoveHome); //remove a record using DELETE

app.get('/api/blogs', blogController.getBlogs); //retrieve all movies using GET
app.post('/api/blog', blogController.postBlog); //create record for a movie using POST
app.put('/api/blog/:id', blogController.putUpdateBlog); //update a record using PUT
app.delete('/api/blog/:id', blogController.deleteRemoveBlog); //remove a record using DELETE

app.set('port', 3000);
app.listen(app.get('port'), function() {
    console.log('The server is working');   
});