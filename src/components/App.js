import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import GameContainer from './GameContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <GameContainer/>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
