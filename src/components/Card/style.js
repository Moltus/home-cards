import styled from "styled-components";

// const colorizer = {
//   red: { bg: "#dc143c", hover: "#ffaebe" },
//   blue: { bg: "#3f14dc", hover: "#b9aeff" },
//   green: { bg: "#1edc14", hover: "#b5ffae" },
//   orange: { bg: "#dc8214", hover: "#ffd4ae" },
//   grey: { bg: "#888", hover: "#bbb" }
// };
const colorizer = {
  red: { bg: "#dc143c", hover: "#cb5069" },
  blue: { bg: "#3f14dc", hover: "#5f52b0" },
  green: { bg: "#1eac14", hover: "#57b04f" },
  orange: { bg: "#dc8214", hover: "#d0894c" },
  grey: { bg: "#2470d3", hover: "#415ea3" }
};

const cardDims = [250, 300];

export const ColorDot = styled.div`
  background-color: ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  /* bottom: ${cardDims[1] / 5 + "px"}; */
  bottom: 64px;
  left: ${cardDims[0] / 2 - 5 + "px"};
  width: 8px;
  height: 8px;
  transition: all 1s 0.15s ease-out;
`;

export const ColorOutline = styled.div`
  border: 1px solid ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  bottom: ${cardDims[1] / 5 + 1 + "px"};
  /* bottom: 60px; */
  left: ${cardDims[0] / 2 - 8 + "px"};
  width: 12px;
  height: 12px;
  transition: all 1s;
`;

export const CardTitle = styled.div`
  display: inline-block;
  width: 120px;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  position: absolute;
  text-align: center;
  /* bottom: ${cardDims[1] / 50 + "px"}; */
  bottom: 20px;
  margin-left: -70px;
  text-align: center;
  transition: all .7s;
`;

export const StyledCard = styled.div`
  text-align: center;
  background-color: #eef;
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
    transform: scale(50);
    border: 5px solid ${props => colorizer[props.color].hover};
  }

  &:hover ${CardTitle} {
    transform: translateY(-50px);
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  &:hover ${CardTitle} span {
    /* opacity: 0; */
    display: none;
  }

  &:hover ${CardTitle}:before {
    content: "Estimer";
  }

  img {
    position: relative;
    z-index: 5;
    display: block;
    height: 35%;
    margin: 15% auto;
  }
`;

export default StyledCard;
