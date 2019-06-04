import React from "react";
import { StyledCard, ColorDot, ColorOutline, CardTitle } from "./style";

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <StyledCard color={this.props.color} bg={this.props.bg}>
        <ColorDot color={this.props.color} />
        <ColorOutline color={this.props.color} />
        <CardTitle>
          <span>{this.props.title}</span>
        </CardTitle>
        <img
          src={"../images/" + this.props.image + ".png"}
          alt={this.props.image}
        />
      </StyledCard>
    );
  }
}

export default Card;
