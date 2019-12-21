import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Mail extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Hello {this.props.mail}</h1>
        <input />
      </div>
    );
  }
}

const Language = props => {
  return <h1>Hello {props.name}</h1>;
};

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Language name="World" />
      <Mail mail="CodeSandbox" />
      <div>
        <input type="submit" value="送信" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
