// Displays the Saved Articles that were searched and stored in the database


// Include React
var React = require("react");

// Create the Search Component
var Saved = React.createClass({

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
          <h3 className="panel-title text-center" style={ {fontSize: "20px"} }><i><b>Saved Articles</b></i></h3>
        </div>

        <div className="panel-body">
          <ul className="list-group col-md-8 col-md-offset-2">

            {/* ++++++++++++++++++++++++++ NEED TO ITERATE OVER THIS ++++++++++++++++++++++++++ */}
            <li className="list-group-item" style={ {borderWidth: "0px" } }>
              <div className="input-group">
                <div type="text" className="form-control"><b>Giant Panda Rampages through NYC</b></div>
                <span className="input-group-btn">
                  <button className="btn btn-danger" type="button">Remove</button>
                </span>
              </div>
            </li>

          </ul>
        </div>

      </div>
      
    );
  }
});


// Export the component back for use in Main file
module.exports = Saved;