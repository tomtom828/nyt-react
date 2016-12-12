// Queries the NYT API for articles. 
// Contains the user's search form.


// Include React
var React = require("react");

// Create the Search Component
var Query = React.createClass({

  // Here we set a generic state
  getInitialState: function() {
    return {
      test: 0
    };
  },

  // NEED TO INCLUDE MORE FUNCTIONS HERE

  // Here we render the Query User Form
  render: function() {
    return (

      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Search</b></i></h3>
        </div>

        <div className="panel-body text-center">
          <form role="form">

            <div className="form-group col-md-offset-3 col-md-6">
              <label for="topic" className="text-center">Topic</label>
              <input type="text" className="form-control text-center" id="topic" />
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label for="startYear">Start Year</label>
              <input type="text" className="form-control text-center" id="startYear" />
            </div>

            <br />

            <div className="form-group col-md-offset-3 col-md-6">
              <label for="endYear">End Year</label>
              <input type="text" className="form-control text-center" id="endYear" />
            </div>

            <br />

            <button type="submit" className="btn btn-info col-md-offset-5 col-md-2" id="searchBtn">Search</button>

          </form>
        </div>

      </div>

    );
  }
});


// Export the component back for use in Main file
module.exports = Query;