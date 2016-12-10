// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var ArticleSchema = new Schema({

  // Title of Article
  title: {
    type: String,
    required: true
  },

  // Date of Article
  date: {
    type: String,
    required: true
  },
  
  // Link to Article
  url: {
    type: String,
    required: true
  }

});

// Create the Article model with Mongoose
var Article = mongoose.model('Article', ArticleSchema);

// Export the Model
module.exports = Article;