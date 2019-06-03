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
          <Card
            title="iPhone"
            image="iphone-small"
            color="blue"
            bg="depression"
          />
          <Card title="iPad" image="ipad-small" color="red" bg="bulge" />
          <Card
            title="MacBook"
            image="macbook-small"
            color="green"
            bg="depression"
          />
          <Card
            title="Apple Watch"
            image="watch-small"
            color="orange"
            bg="bulge"
          />
        </StyledCardContainer>
      </Wrapper>
    </React.Fragment>
  );
};

export default CardContainer;
