import React from 'react';
import ProfileBar from './ProfileBar';
import PlayerDisplayPortContainer from './PlayerDisplayPortContainer';
import OpponentDisplayPortContainer from './OpponentDisplayPortContainer';
import StatusBarContainer from './StatusBarContainer';
import BottomBar from './BottomBar';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1150px;
    height: 600px;
    margin: 100px auto;
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
    height: 700px;
    width: 1300px;
    position: relative;
    &:focus {
        outline-color: ghostwhite;
        outline-style: auto;
        outline-width: 5px;
        outline-offset: 0px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StartButton = styled.div`
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 250px;
    height: 75px;
    font-size: 25px;
    cursor: pointer;
    &:hover {
        background-color: ghostwhite;
    }
`

export default class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this)
        this.gameDiv = [];
    }

    handleInput(e) {
        if (e.key === "ArrowLeft") {
            this.props.playerLeft();
        } else if (e.key === "ArrowRight") {
            this.props.playerRight();
        }
    }

    render() {
        return (
            <GameContainerWrapper tabIndex="0" onKeyDown={this.handleInput}>

                {this.props.showStartButton &&
                    <StartButton onClick={this.props.gameStart}>Start</StartButton>
                }

                {this.props.showGamePanels &&
                    <Wrapper>
                        <ProfileBar></ProfileBar>
                        <StatusBarContainer></StatusBarContainer>
                        <PlayerWindowsWrapper>
                            <PlayerDisplayPortContainer></PlayerDisplayPortContainer>
                            <OpponentDisplayPortContainer></OpponentDisplayPortContainer>
                        </PlayerWindowsWrapper>
                        <BottomBar></BottomBar>
                    </Wrapper>
                }
            </GameContainerWrapper>
        )
    }
}