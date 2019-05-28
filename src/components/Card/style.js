import styled from "styled-components";

const colorizer = {
  red: { bg: "#dc143c", hover: "#ffaebe" },
  blue: { bg: "#3f14dc", hover: "#b9aeff" },
  green: { bg: "#1edc14", hover: "#b5ffae" },
  orange: { bg: "#dc8214", hover: "#ffd4ae" }
};

export const ColorDot = styled.div`
  background-color: ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  bottom: 120px;
  left: 150px;
  width: 10px;
  height: 10px;
  transition: all 1s 0.15s;
`;

export const ColorOutline = styled.div`
  border: 1px solid ${props => colorizer[props.color].bg};
  position: absolute;
  border-radius: 50%;
  bottom: 116px;
  left: 146px;
  width: 16px;
  height: 16px;
  transition: all 1s;
`;

export const StyledCard = styled.div`
  background-color: white;
  width: 300px;
  height: 450px;
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
  }
`;

export const CardTitle = styled.h3`
  position: absolute;
  width: 100%;
  bottom: 50px;
  text-align: center;
`;

export default StyledCard;
