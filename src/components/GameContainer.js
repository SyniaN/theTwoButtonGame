import React from 'react';
import ProfileBar from './ProfileBar';
import ProgressBar from './ProgressBar';
import DisplayPort from './DisplayPort';
import ButtonBar from './ButtonBar';
import ItemBar from './ItemBar';
import GemsCount from './GemsCount';

import styled from 'styled-components';

const Wrapper = styled.div`
    width: 900px;
    margin: auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center
`

export default class GameContainer extends React.Component {
    render(){
        return(
            <Wrapper>
                <h4>Start of Game Container</h4>
                <ProfileBar></ProfileBar>
                <ProgressBar></ProgressBar>
                <DisplayPort></DisplayPort>
                <ButtonBar></ButtonBar>
                <ItemBar></ItemBar>
                <GemsCount></GemsCount>
            </Wrapper>
        )
    }
}