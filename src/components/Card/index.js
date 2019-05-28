import React from "react";
import StyledCard from "./style";

class Card extends React.Component {
  render() {
    return (
      <StyledCard>
        <div className={"color-dot " + this.props.color} />
        <div className={"color-outline " + this.props.color} />
        <h3 className="card-title">{this.props.title}</h3>
      </StyledCard>
    );
  }
}

export default Card;
