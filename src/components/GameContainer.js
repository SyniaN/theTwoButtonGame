import React from 'react';
import ProfileBar from './ProfileBar';
import DisplayPortContainer from './DisplayPortContainer';
import ProgressBarContainer from './ProgressBarContainer';
import ItemBar from './ItemBar';
import GemsCount from './GemsCount';

import styled from 'styled-components';

const Wrapper = styled.div`
    min-width: 990px;
    max-width: 1500px;
    height: 750px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: salmon;
`

const GameWindowsRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;
`

const GameWindow = styled.div`
    justify-content: space-between;
    width: 400px;
    flex: 1
`

export default class GameContainer extends React.Component {
    render(){
        return(
            <Wrapper>
                <ProfileBar></ProfileBar>
                <GameWindowsRow>
                    <GameWindow>
                        <ProgressBarContainer person="player"></ProgressBarContainer>
                        <DisplayPortContainer person="player"></DisplayPortContainer>
                        <ItemBar></ItemBar>
                    </GameWindow>
                    <GameWindow>
                        <ProgressBarContainer person="opponent"></ProgressBarContainer>
                        <DisplayPortContainer person="opponent"></DisplayPortContainer>
                        <ItemBar></ItemBar>
                    </GameWindow>
                </GameWindowsRow>                
                <GemsCount></GemsCount>
            </Wrapper>
        )
    }
}