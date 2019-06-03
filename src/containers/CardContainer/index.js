import React from "react";
import { Wrapper } from "../../utils/styles/global";
import Card from "../../components/Card";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const CardContainer = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <StyledCardContainer>
          <Card title="iPhone" color="blue" bg="depression" />
          <Card title="iPad" color="red" bg="bulge" />
          <Card title="MacBook" color="green" bg="depression" />
          <Card title="Apple Watch" color="orange" bg="bulge" />
        </StyledCardContainer>
      </Wrapper>
    </React.Fragment>
  );
};

export default CardContainer;
