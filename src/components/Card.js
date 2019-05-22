import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="color-point" />
        <div className="color-outline" />
        <h3 className="card-title">MacBook Pro</h3>
      </div>
    );
  }
}

export default Card;
