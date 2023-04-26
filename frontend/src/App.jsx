import React from "react";
import ReactDOM from "react-dom";
import Play from "./components/play";
import "./index.css";

const App = () => (
  <div className="container">
    <Play/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
