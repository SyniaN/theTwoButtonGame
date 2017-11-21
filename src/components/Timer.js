import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 200px;
    height: 75px;
    box-sizing: border-box;
    border: 2px solid white;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Time = styled.h1`
    font-size:38px;
    font-family: Arial;
    color: ghostwhite;
`

const Timer = () => {
    return (
        <Wrapper>
            <Time>0:24</Time>
        </Wrapper>
    );
};

export default Timer;