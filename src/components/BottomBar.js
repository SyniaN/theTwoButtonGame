import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    top: 525px;
    position:absolute;
    height: 75px;
    border-style: dotted;
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