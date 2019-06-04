import React from "react";
import { GlobalStyle } from "./utils/styles/GlobalStyle";
import { Wrapper } from "./containers/Wrapper";
import CardContainer from "./containers/CardContainer";

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Wrapper>
          <CardContainer />
        </Wrapper>
      </>
    );
  }
}

export default App;
