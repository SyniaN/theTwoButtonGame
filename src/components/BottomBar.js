import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    border: 2px solid white;
    top: 525px;
    position:absolute;
    width: 175px;
    height: 75px;
`

class BottomBar extends Component {
    render() {
        return (
            <Wrapper>
                This is the BottomBar
            </Wrapper>
        );
    }
}

export default BottomBar;