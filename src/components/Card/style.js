import styled, { keyframes } from "styled-components";

const colorizer = {
  red: { bg: "#dc143c", hover: "#cb5069" },
  blue: { bg: "#3f14dc", hover: "#5f52b0" },
  green: { bg: "#1eac14", hover: "#57b04f" },
  orange: { bg: "#dc8214", hover: "#d0894c" },
  grey: { bg: "#2470d3", hover: "#415ea3" }
};

const spring = keyframes`
  0% {transform: scale(1);}
  50% {transform: scale(.8);}
  100% {transform: scale(1);}
`;
const cardDims = [250, 300];

export const ColorDot = styled.div`
  background-color: ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  bottom: ${cardDims[1] / 5 - 4 + "px"};
  left: ${cardDims[0] / 2 - 4 + "px"};
  width: 8px;
  height: 8px;
  transition: all 0.7s ease-in-out;
`;

export const ColorOutline = styled(ColorDot)`
  opacity: 0.3;
  bottom: ${cardDims[1] / 5 - 8 + "px"};
  left: ${cardDims[0] / 2 - 8 + "px"};
  width: 16px;
  height: 16px;
`;

export const CardTitle = styled.div`
  display: inline-block;
  width: 120px;
  padding: 15px 10px;
  border-radius: 25px;
  background-color: transparent;
  position: absolute;
  text-align: center;
  bottom: 10px;
  margin-left: -70px;
  text-align: center;
  transition: all 0.7s;
`;

export const StyledCard = styled.div`
  cursor: pointer;
  text-align: center;
  background: #efeff2;
  background-image: ${props => "url(../images/card-bg-" + props.bg + ".svg)"};
  background-repeat: no-repeat;
  background-position: bottom;
  margin: 10px;
  width: ${cardDims[0] + "px"};
  height: ${cardDims[1] + "px"};
  box-shadow: 0 0 10px lightgrey;
  border-radius: 10px;
  overflow: hidden;
  position: relative;

  &:hover ${ColorDot} {
    transform: scale(80);
    background-color: ${props => colorizer[props.color].hover};
  }

  &:hover ${ColorOutline} {
    transform: scale(80);
    border: 5px solid ${props => colorizer[props.color].hover};
  }

  &:hover ${CardTitle} {
    transform: translateY(-50px);
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  &:hover ${CardTitle} span {
    display: none;
  }

  &:hover ${CardTitle}:before {
    content: "Estimer";
  }

  img {
    position: relative;
    z-index: 5;
    display: block;
    height: 32%;
    margin: 15% auto;
  }

  &:hover img {
    animation: ${spring} 0.6s;
  }
`;

export default StyledCard;
