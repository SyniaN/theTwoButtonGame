import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import GameContainer from './GameContainer';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #96e8cc;
  height: 750px;
`


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <GameContainer />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
