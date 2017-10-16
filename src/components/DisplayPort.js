import React, {Component} from 'react';
import styled from 'styled-components';
import FlexWrapper from './SharedComponents/FlexWrapper';
import SideDisplay from './SideDisplay';

const CentralWrapper = styled.div`
    height:350px;
    width: 180px;
    display: flex;
    background-color:#eee;
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

    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e){
        e.preventDefault();
        console.log(e.key);
        if (e.key === "ArrowLeft"){
            this.props.onLeftSelect();
        } else if (e.key ==="ArrowRight") {
            this.props.onRightSelect();
        }

    }

    render(){
        return(
            <FlexWrapper tabIndex="" onKeyDown={this.handleKeyPress}>
                <SideWrapper>
                    <SideDisplay item={this.props.leftItem}></SideDisplay>
                </SideWrapper>
                <CentralWrapper><h1>{this.props.centralItem}</h1></CentralWrapper>
                <SideWrapper>
                    <SideDisplay item={this.props.rightItem}></SideDisplay>
                </SideWrapper>
            </FlexWrapper>
        )
    }
}