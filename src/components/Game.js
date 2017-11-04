import React from 'react';
import ProfileBar from './ProfileBar';
import DisplayPortContainer from './DisplayPortContainer';
import StatusBar from './StatusBar';
import BottomBar from './BottomBar';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1150px;
    height: 500px;
    margin: auto;
    position: relative;
`

const PlayerWindowsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 175px;
    height: 300px;
    width: 1150px;
    border-style:dotted;
`

const GameContainerWrapper = styled.div`
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

export default class GameContainer extends React.Component {
    constructor() {
        super();
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        if (e.key === "ArrowLeft") {
            this.props.inputLeft();
        } else if (e.key === "ArrowRight") {
            this.props.inputRight();
        }
    }

    render() {
        return (
            <GameContainerWrapper tabIndex="1" onKeyDown={this.handleInput}>
                <Wrapper>
                    <ProfileBar></ProfileBar>
                    <StatusBar></StatusBar>
                    <PlayerWindowsWrapper>
                        <DisplayPortContainer person="player"></DisplayPortContainer>
                        <DisplayPortContainer person="opponent"></DisplayPortContainer>
                    </PlayerWindowsWrapper>
                    <BottomBar></BottomBar>
                </Wrapper>
            </GameContainerWrapper>
        )
    }
}