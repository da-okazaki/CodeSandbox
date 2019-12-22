import React from "react";
import ReactDOM from "react-dom";

import App from "./component/App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

/* 
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ul>
        <li>ラーメン</li>
        <li>焼肉</li>
        <li>寿司</li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
*/
