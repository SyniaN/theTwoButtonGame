import React from 'react';
import ProfileBar from './ProfileBar';
import ProgressBar from './ProgressBar';
import DisplayPortContainer from './DisplayPortContainer';
import ButtonBar from './ButtonBar';
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
                        <ProgressBar></ProgressBar>
                        <DisplayPortContainer></DisplayPortContainer>
                        <ItemBar></ItemBar>
                    </GameWindow>
                    <GameWindow>
                        <ProgressBar></ProgressBar>
                        <DisplayPortContainer></DisplayPortContainer>
                        <ItemBar></ItemBar>
                    </GameWindow>
                </GameWindowsRow>                
                <GemsCount></GemsCount>
            </Wrapper>
        )
    }
}