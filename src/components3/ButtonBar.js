import React, {Component} from 'react';
import FlexWrapper from './SharedComponents/FlexWrapper';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`

const Button = Styled.div`
    height: 100px;
    width: 100px;
    background-color: red;
`

export default class ButtonBar extends Component {
    render(){
        return(
            <FlexWrapper>
                <Wrapper>
                    <Button></Button>
                    <Button></Button>
                </Wrapper>
            </FlexWrapper>
        )
    }
}