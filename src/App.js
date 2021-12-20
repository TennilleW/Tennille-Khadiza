import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  members = [
    { name: "Lisa" },
    { name: "Jisoo" },
    { name: "Jennie" },
    { name: "Rose" }
  ];
  render() {
    return (
      <div className="App">
        <h1>BlackPink Cafe</h1>
        <h10>Welcome!</h10>
      </div>
    );
  }
}

export default App;
