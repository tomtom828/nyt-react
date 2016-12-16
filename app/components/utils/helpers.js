// Node Dependencies
var axios = require('axios');


// NY Times API Request Function
var articleQuery = function(topic, beginYear, endYear){

  var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" +
                  topic + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";

  // API get request
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

      // Return the array of articles
      return result;
    }
    
    // If we don't get any results, return an empty string
    return "";
  });

}



//Export all helper functions
module.exports = {
 articleQuery
}
