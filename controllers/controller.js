// Node Dependencies
var express = require('express');
var router = express.Router();


// Import the Article model
var Article = require('../models/Article.js');



// Main GET - This will display the ReactJS application.
router.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

// API GET - your components will use this to query MongoDB for all saved articles.
router.get("/api/saved", function(req, res) {
  res.send('query MongoDB for all saved articles')
});


// API POST - your components will use this to save an article to the database.
router.post("/api/saved", function(req, res) {
  
  // Using the Article model, create a new entry (note that the "req.bidy" object has the exact same key-value pairs as the model)
  var entry = new Article (req.body);

  // Save the entry to MongoDB
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
    } 
    // or log the doc that was saved to the DB
    else {
      console.log(doc);
    }
  });

});


// API DELETE - your components will use this to delete a saved article in the database
router.delete("/api/saved", function(req, res) {
  res.send('delete a saved article in the database')
});


// CATCH ALL "*" - This redirect user to the "/" route for any unknown cases
router.get("*", function(req, res) {
  res.redirect("/");
});


// ================================
// Export Router to Server.js
module.exports = router;