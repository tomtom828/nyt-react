// Node Dependencies
var request = require('request');


// NY Times API Request Function
var articleQuery = function(topic, beginYear, endYear, callback){

  request.get({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
    qs: {
      'api-key': "b9f91d369ff59547cd47b931d8cbc56b:0:74623931", // API Key ripped from Ahmed's copy on Heroku muahahaha
      'q': topic,
      'begin_date': beginYear + "0101", // for Jan 1st of start year
      'end_date': endYear + "1231" // for Dec 31st of end year
    },
  }, function(err, response, body) {

    // Parse for JSON
    body = JSON.parse(body);

    // Use callback function
    callback(body);

  });

}


// Export all helper functions
module.exports = {
  articleQuery
}





// TEST CASE IGNORE
// articleQuery("hello", 1991, 1992, function(data){
//   console.log(data);
// })