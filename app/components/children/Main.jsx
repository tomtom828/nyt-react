// Contains the main-container div that holds the main layout and navigation. 
// This component should also be able to hold sub-components Search and Saved

// Include React
var React = require("react");

// UN COMMENT ALL THESE LATER!
// Here we include all of the sub-components
var Query = require("./Query.jsx");
var Search = require("./Search.jsx");
var Saved = require("./Saved.jsx");

// Requiring our helper for making API calls
var helpers = require("../utils/helpers.js");

// Create the Main Component
var Main = React.createClass({

  // Here we set a generic state
  getInitialState: function() {
    return {
      test: 0
    };
  },

  // NEED TO INCLUDE MORE FUNCTIONS HERE

  // Here we render the function
  render: function() {
    return (

      <div className="container" style={ {backgroundColor: "white", borderStyle: "solid", borderWidth: "1px"} }>

        <div className="page-header">
          <h1 className="text-center"><img style={ {width: "70%"} } src="img/nyt-header.svg" alt="The New York Times"/></h1>
          <h2 className="text-center" style={ {marginTop: "-12px"} }><b><i>A React Rendition</i></b></h2>
          <h4 className="text-center">Search for and annotate articles of interest</h4>
        </div>

        <Query />
        <Search />
        <Saved />

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Main;
