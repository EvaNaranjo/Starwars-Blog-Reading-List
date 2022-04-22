//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import AppRouter from "./AppRouter.jsx";

//render your react application
ReactDOM.render(<AppRouter />, document.querySelector("#app"));
