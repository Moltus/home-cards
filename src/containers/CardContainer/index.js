import React from "react";
import { Wrapper } from "../../utils/styles/global";
import Card from "../../components/Card";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 40px;
`;

const CardContainer = () => {
  return (
    <React.Fragment>
      <Wrapper>
        <StyledCardContainer>
          <Card title="iPhone" color="blue" />
          <Card title="iPad" color="red" />
          <Card title="MacBook" color="green" />
          <Card title="Apple Watch" color="orange" />
        </StyledCardContainer>
      </Wrapper>
    </React.Fragment>
  );
};

export default CardContainer;
