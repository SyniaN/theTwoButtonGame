import React, { Component } from 'react';
import styled from 'styled-components';
import FlexWrapper from './SharedComponents/FlexWrapper';
import SideDisplay from './SideDisplay';

const CentralWrapper = styled.div`
    box-sizing: border-box;
    height:300px;
    width: 300px;
    display: flex;
    background-color:#eee;
    justify-content: center;
    align-items: center;
`

const SideWrapper = styled.div`
    box-sizing: border-box;
    height: 300px;
    width: 100px;
    display: flex;
    background-color: #96e8cc;
    justify-content: center;
    align-items:center;
    border: 2px solid white
`
const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    width: 550px;
    top: 175px;
    left: ${(prop) => prop.person === "player" ? 0 : ""};
    right: ${(prop) => prop.person === "opponent" ? 0 : ""};
    &:focus: {
        outline-style:none;
        box-shadow:none;
        border-color:transparent;
    } 
`

export default class DisplayPort extends Component {

    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e) {
        console.log(e.key);
        e.preventDefault();
        if (e.key === "ArrowLeft") {
            this.props.onLeftSelect();
        } else if (e.key === "ArrowRight") {
            this.props.onRightSelect();
        }
    }

    render() {
        return (
            <Wrapper tabIndex={this.props.tabIndex} onKeyDown={this.handleKeyPress}>
                <SideWrapper>
                    <SideDisplay item={this.props.leftItem}></SideDisplay>
                </SideWrapper>
                <CentralWrapper><h1>{this.props.centralItem}</h1></CentralWrapper>
                <SideWrapper>
                    <SideDisplay item={this.props.rightItem}></SideDisplay>
                </SideWrapper>
            </Wrapper>
        )
    }
}