import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import GameContainer from './GameContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #96e8cc;
  height: 750px;
`
const GameContainerPadding = styled.div`
box-sizing: border-box;
  height: 625px;
  width: 1200px;
  padding: 25px 25px;
  margin: 25px auto;
  position: relative;
  &:focus {
    outline-color: pink;
    outline-style: auto;
    outline-width: 5px;
    outline-offset: 0px;
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
