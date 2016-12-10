// @author: Thomas Thompson
// @github: tomtom28
// @comment: HW for Week 19 - NY Time Article Search with ReactJS! Whoo!


// Require Node Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan'); // for debugging



// Initialize Express for debugging & body parsing
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));


// Serve Static Content
app.use(express.static(process.cwd() + '/public'));



// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if(process.env.NODE_ENV == 'production'){
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect('mongodb://heroku_kbdv0v69:860jh71jd1iu5m5639gjr0gg9l@ds129028.mlab.com:29028/heroku_kbdv0v69');
}
else{
  mongoose.connect('mongodb://localhost/nytreact');
}
var db = mongoose.connection;

// Show any Mongoose errors
db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
  console.log('Mongoose connection successful.');
});

// Import the Article model
var Article = require('./models/Article.js');
// ---------------------------------------------------------------------------------------------------------------



// Import Routes/Controller
var router = require('./controllers/controller.js');
app.use('/', router);



// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Running on port: ' + port);
});