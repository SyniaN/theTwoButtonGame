import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align === "left" ? "end" : "start"};
`
const NameBox = styled.div`
    width: 200px;
    height: 50px;
    box-sizing: border-box;
    border: 2px solid white;
    border-left-width: ${props => props.align === "left" ? "0px" : "2px"};
    border-right-width: ${props => props.align === "right" ? "0px" : "2px"};
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const RankHolder = styled.div`
    width: 180px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Name = styled.h1`
    font-family: Arial;
    color: ghostwhite;
    font-size: 22px;
`

const Circle = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 10px;
    border: 2px solid ghostwhite;
`

const SolidCircle = Circle.extend`
    background-color: ghostwhite;
`

const ProfileInfo = (props) => {
    return (
        <Wrapper align={props.align}>
            <NameBox align={props.align}>
                <Name>SyniaN7</Name>
            </NameBox>
            <RankHolder>
                <SolidCircle />
                <SolidCircle />
                <SolidCircle />
                <Circle />
                <Circle />
            </RankHolder>
        </Wrapper>
    );
};

export default ProfileInfo;