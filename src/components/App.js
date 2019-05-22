import React from "react";
import Card from "./Card";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default App;
