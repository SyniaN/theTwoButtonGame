import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    top: 100px;
    left: 125px;
    width: 900px;
    height: 50px;
    border-style: dotted;
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