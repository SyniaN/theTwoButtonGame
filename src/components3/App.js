import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import GameContainer from './GameContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #96e8cc
`
const GameContainerPadding = styled.div`
box-sizing: border-box;
  height: 700px;
  width: 1300px;
  padding: 50px 25px;
  margin: auto;
  position: relative;
  &:focus {
    outline-color: pink;
    outline-style: auto;
    outline-width: 5px;
    outline-offset: -25px;
  }
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <GameContainerPadding tabIndex="1">
          <GameContainer />
        </GameContainerPadding>
      </Wrapper>
    );
  }
}

export default App;
