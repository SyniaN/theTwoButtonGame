import React, {Component} from 'react';
import styled from 'styled-components';
import FlexWrapper from './SharedComponents/FlexWrapper';

const Wrapper = styled.div`
    height:200px;
    width:200px;
    display: flex;
    background-color:blue;
    justify-content: center;
    align-items: center;
`

export default class DisplayPort extends Component {
    render(){
        return(
            <FlexWrapper>
                <Wrapper>DisplayPort</Wrapper>
            </FlexWrapper>
        )
    }
}