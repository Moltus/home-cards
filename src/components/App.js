import React from "react";
import Card from "./components/Card";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="card-container">
        <Card title="iPhone" color="blue" />
        <Card title="iPad" color="red" />
        <Card title="MacBook" color="green" />
        <Card title="Apple Watch" color="orange" />
      </div>
    );
  }
}

export default App;
