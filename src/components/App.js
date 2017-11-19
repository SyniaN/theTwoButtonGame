import React, { Component } from 'react';
import Header from './Header';
import GameContainer from './GameContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #96e8cc;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items:center;
`


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <GameContainer />
        <span />
      </Wrapper>
    );
  }
}

export default App;
