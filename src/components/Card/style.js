import styled from "styled-components";
// import bulge from "../../images/card-bg-bulge.svg";
// import depression from "../../images/card-bg-depression.svg";

const colorizer = {
  red: { bg: "#dc143c", hover: "#ffaebe" },
  blue: { bg: "#3f14dc", hover: "#b9aeff" },
  green: { bg: "#1edc14", hover: "#b5ffae" },
  orange: { bg: "#dc8214", hover: "#ffd4ae" },
  grey: { bg: "#888", hover: "#bbb" }
};

const cardDims = [250, 300];

export const ColorDot = styled.div`
  background-color: ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  bottom: ${cardDims[1] / 5 + "px"};
  left: ${cardDims[0] / 2 - 5 + "px"};
  width: 10px;
  height: 10px;
  transition: all 1s 0.15s;
`;

export const ColorOutline = styled.div`
  border: 1px solid ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  bottom: ${cardDims[1] / 5 - 4 + "px"};
  left: ${cardDims[0] / 2 - 9 + "px"};
  width: 16px;
  height: 16px;
  transition: all 1s;
`;

export const StyledCard = styled.div`
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

  img {
    position: relative;
    z-index: 5;
    display: block;
    height: 35%;
    margin: 15% auto;
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  width: 100%;
  bottom: ${cardDims[1] / 50 + "px"};
  text-align: center;
`;

export default StyledCard;
