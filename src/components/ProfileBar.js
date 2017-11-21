import React from 'react';
import styled from 'styled-components';
import PlayerProfileContainer from './PlayerProfileContainer';
import OpponentProfileContainer from './OpponentProfileContainer';
import TimerContainer from './TimerContainer'

const Wrapper = styled.div`
    position:absolute;
    width: 1150px;
    display:flex;
    justify-content:space-between;
`
export default class ProfileBar extends React.Component {
    render() {
        return (
            <Wrapper>
                <PlayerProfileContainer />
                <TimerContainer />
                <OpponentProfileContainer />
            </Wrapper>
        )
    }
}