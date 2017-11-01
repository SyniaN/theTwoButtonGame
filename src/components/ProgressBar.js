import React from 'react';
import FlexWrapper from './SharedComponents/FlexWrapper';

export default class ProgressBar extends React.Component{
    render(){
        return(
            <FlexWrapper>
                <h1>{this.props.score}</h1>
            </FlexWrapper>
        )
    }
}