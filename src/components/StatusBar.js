import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    border: 2px solid white;
    position: absolute;
    top: 100px;
    left: 125px;
    width: 900px;
    height: 50px;
`

class StatusBar extends Component {
    render() {
        return (
            <Wrapper>
                This is the Status Bar
            </Wrapper>
        );
    }
}

export default StatusBar;