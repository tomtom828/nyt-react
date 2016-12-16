// Displays API search results from another possible Query component and Results component. 
// Gives the user the ability to save an article to their Saved Articles.

// Include React
var React = require("react");

// Create the Search Component
var Search = React.createClass({

  // Here we set a generic state
  getInitialState: function() {
    return {
      test: 0
    };
  },

  // NEED TO INCLUDE MORE FUNCTIONS HERE

  // Here we render the Search Results Panel
  render: function() {
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
              return (
                <li key={search._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control"><b>{search.headline.main}</b></div>
                    <span className="input-group-btn">
                      <button className="btn btn-success" type="button">Save</button>
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
