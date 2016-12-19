// Displays API search results from another possible Query component and Results component. 
// Gives the user the ability to save an article to their Saved Articles.

// Include React
var React = require("react");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers.js");

// Create the Search Component
var Search = React.createClass({

  // Here we set a generic state
  getInitialState: function() {
    return {
      arrayOfArticles: []
    };
  },

  _handleSave: function(event){

    // Collect the clicked article's id
    var articleId = event.target.value;

    // Collect the clicked article's attributes
    var saveArticleObj;
    for(var i=0; i<this.state.arrayOfArticles.length; i++){
      if(this.state.arrayOfArticles[i].id == articleId){
        saveArticleObj = this.state.arrayOfArticles[i];
      }
    }

    // Copy "this" into "that" so that component is accessible inside the functions.
    var that = this;

    // Send this data to the API endpoint to save it to Mongo
    helpers.apiSave(saveArticleObj).then(function(){

      // Re-set the Mongo data to account for a change in database (i.e. added an article)
      // By Querying Mongo Again for new Data, this will re-render the components in saved.jsx
      helpers.apiGet().then(function(query){
        that.props._resetMongoResults(query.data);
      });


    }.bind(this))

  },

  // Here we render the Search Results Panel
  render: function() {

    // http://stackoverflow.com/questions/29810914/react-js-onclick-cant-pass-value-to-method
    var that = this;

    return (

      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Results</b></i></h3>
        </div>

        <div className="panel-body">
          <ul className="list-group col-md-8 col-md-offset-2">

            {/* ++++++++++++++++++++++++++++++++ ITERATE HERE ++++++++++++++++++++++++++++++++ */}
            {/* Here we use a map function to loop through an array in JSX */}
            {this.props.apiResults.map(function(search, i) {

              // Build array of articles
              that.state.arrayOfArticles.push({
                id: search._id,
                title: search.headline.main,
                date: search.pub_date,
                url: search.web_url
              });

              return (
                <li key={search._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control">
                      <b><a href={search.web_url} target="_new" style={ {color: "black"} }>{search.headline.main}</a></b>
                      <i> {search.pub_date.substring(0, 10)}</i>
                    </div>       
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button" onClick={that._handleSave} value={search._id}>Save</button>
                    </span>
                  </div>
                </li>
              );
            })}

          </ul>
        </div>
      </div>

    );
  }
});


// Export the component back for use in Main file
module.exports = Search;
