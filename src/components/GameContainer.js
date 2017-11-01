import React from 'react';
import ProfileBar from './ProfileBar';
import DisplayPortContainer from './DisplayPortContainer';
import ItemBar from './ItemBar';
import GemsCount from './GemsCount';
import StatusBar from './StatusBar';
import BottomBar from './BottomBar';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 1150px;
    height: 600px;
    margin: auto;
    border-style: solid;
    position: relative;
`

const GameWindowsRow = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 175px;
    height: 300px;
    width: 1150px;
    border-style:dotted;
`

export default class GameContainer extends React.Component {
    render() {
        return (
            <Wrapper>
                <ProfileBar></ProfileBar>
                <StatusBar></StatusBar>
                <GameWindowsRow>
                    <DisplayPortContainer person="player"></DisplayPortContainer>
                    <DisplayPortContainer person="opponent"></DisplayPortContainer>
                </GameWindowsRow>
                <BottomBar></BottomBar>
            </Wrapper>
        )
    }
}