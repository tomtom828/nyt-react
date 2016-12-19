// Node Dependencies
var axios = require('axios');





// NY Times API Request Function
var articleQuery = function(topic, beginYear, endYear){

  var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                  topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";


  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){
    // NY Times API get request
    axios.get(queryURL).then(function(response) {

      var result = [];

      // If get get a result, return only the first 5 articles
      if (response.data.response.docs[0]) {

        for(var i=0; i<response.data.response.docs.length; i++){
          // Break out of the loop if there are more than 5 entries
          
          if(i==5){
            break;
          }
          else {
            // Otherwise, push to results array
            result.push(response.data.response.docs[i]);
          }
        }

        // Return the array of articles via *Promise*
        fulfill(result);
        
      }
      else{
        // If we don't get any results, return an empty string via *Promise*
        reject("");
      }
      
    });
  });

}





// API Post Request Function
var apiSave = function(articleObj){

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Re-format the article Object to match the Mongo Model (ie we need to take off the the id)
    var params = new URLSearchParams();
    params.append("title", articleObj.title);
    params.append("date", articleObj.date);
    params.append("url", articleObj.url);
    axios.post(apiURL, params).then(function(response){

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }
      
    })

  });
  
}





// API Post Request Function
var apiGet = function(){

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/saved';

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Re-format the article Object to match the Mongo Model (ie we need to take off the the id)
    axios.get(apiURL).then(function(response) {

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }

    });
    
  });
  
}





// API Post Request Function
var apiDelete = function(deleteArticleId){

  // Get API Post URL (this allows it to work in both localhost and heroku)
  var apiURL = window.location.origin + '/api/delete/' + deleteArticleId;

  // Create a JavaScript *Promise*
  return new Promise(function (fulfill, reject){

    // Send the MongoDB Id for deletion
    axios.post(apiURL).then(function(response) {

      // Error handling / fullfil promise if successful query
      if(response){
        fulfill(response);
      }
      else{
        reject("");
      }

    });

  });

}





// Export all helper functions
module.exports = {
 articleQuery,
 apiSave,
 apiGet,
 apiDelete
}
