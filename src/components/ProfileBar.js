import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-sizing: border-box;
    border: 2px solid white;
    position:absolute;
    height: 75px;
    width: 1150px;
`
export default class ProfileBar extends React.Component {
    render() {
        return (
            <Wrapper>
                <h4>Profile Bar</h4>
            </Wrapper>
        )
    }
}