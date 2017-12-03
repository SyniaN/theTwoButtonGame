import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    border: 2px solid white;
    position: absolute;
    top: 125px;
    left: 125px;
    width: 900px;
    height: 25px;
    display: flex;
    justify-content: space-between;
`

const ProgressBar = styled.div`
    flex: ${props => props.flex ? props.flex : 0};
    display: flex;
    justify-content: center;
`

const PlayerProgress = ProgressBar.extend`
    background-color: cornflowerblue;
`

const OpponentProgress = ProgressBar.extend`
    background-color: salmon;

`

class StatusBar extends Component {
    render() {
        return (
            <Wrapper>
                <PlayerProgress flex={this.props.playerScore}>{this.props.playerScore}</PlayerProgress>
                <OpponentProgress flex={this.props.opponentScore}>{this.props.opponentScore}</OpponentProgress>
            </Wrapper>
        );
    }
}

export default StatusBar;