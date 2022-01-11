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
  items = [
    { food: "Gamjatang(Lisa)" },
    { food: "Truffle French Fries(Lisa)" },
    { food: "Milk Flavored Ice Cream Latte(Jennie)" },
    { food: "Mint Chocolate Coffee(Jennie)" },
    { food: "Chicken fried rice(Jisoo)" },
    { food: "Chocolate cappuccino(Jisoo" },
    { food: "Crab sandwich(Rose)" },
    { food: "Mango smoothie(Rose)" },
    { food: "Avocado Toast(Jennie)" },
    { food: "Kimchi Stew(Rose)" },
    { food: "Tempura(Lisa)" },
    { food: "Iced Americano(Jisoo)" }
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
