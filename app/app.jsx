// @author: Thomas Thompson
// @github: tomtom28
// @comment: HW for Week 19 - NY Time Article Search with ReactJS!



// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Parent Component
var Main = require("./components/children/Main.jsx");

// This code here allows us to render our main component (in this case Main)
// Note that the Id is "app" which matches that of the "index.html" file
ReactDOM.render(<Main />, document.getElementById("app"));
