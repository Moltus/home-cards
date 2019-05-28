import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className={"color-dot " + this.props.color} />
        <div className={"color-outline " + this.props.color} />
        <h3 className="card-title">{this.props.title}</h3>
      </div>
    );
  }
}

export default Card;
