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
`

const PlayerProgress = styled.div`
    flex: 1;
    background-color: cornflowerblue;
`

const OpponentProgress = styled.div`
    flex: 1;
    background-color: salmon;
`


class StatusBar extends Component {
    render() {
        return (
            <Wrapper>
                <PlayerProgress />
                <OpponentProgress />
            </Wrapper>
        );
    }
}

export default StatusBar;