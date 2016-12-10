// Contains the main-container div that holds the main layout and navigation. 
// This component should also be able to hold sub-components Search and Saved

// Include React
var React = require("react");

// UN COMMENT ALL THESE LATER!
// Here we include all of the sub-components
//var Search = require("./Search");
//var Saved = require("./Saved");

// Requiring our helper for making API calls
//var helpers = require("../utils/helpers");

// Create the Parent Component
var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      test: 0
    };
  },

  // NEED TO INCLUDE MORE FUNCTIONS HERE

  // Here we render the function
  render: function() {
    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h2>New York Times <b>React</b>ions!</h2>
            <hr />
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
