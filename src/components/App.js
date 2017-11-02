import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import GameContainer from './GameContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #96e8cc
`

const GameContainerPadding = styled.div`
  height: 700px;
  width: 1200px;
  padding: 50px 25px;
  margin: auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <GameContainerPadding>
          <GameContainer />
        </GameContainerPadding>
      </Wrapper>
    );
  }
}

export default App;
