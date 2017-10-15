import React, {Component} from 'react';
import styled from 'styled-components';
import FlexWrapper from './SharedComponents/FlexWrapper';
import SideDisplay from './SideDisplay';

const CentralWrapper = styled.div`
    height:350px;
    width: 180px;
    display: flex;
    background-color:blue;
    justify-content: center;
    align-items: center;
`

const SideWrapper = styled.div`
    height: 350px;
    width: 120px;
    display: flex;
    background-color: red;
    justify-content: center;
    align-items:center;
`

export default class DisplayPort extends Component {
    render(){
        return(
            <FlexWrapper>
                <SideWrapper>
                    <SideDisplay></SideDisplay>
                </SideWrapper>
                <CentralWrapper>DisplayPort</CentralWrapper>
                <SideWrapper>
                    <SideDisplay></SideDisplay>
                </SideWrapper>
            </FlexWrapper>
        )
    }
}