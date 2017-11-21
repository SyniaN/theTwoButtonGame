import React from 'react';
import styled from 'styled-components';
import DisplayPhoto from './DisplayPhoto';
import ProfileInfo from './ProfileInfo';

const Wrapper = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    box-sizing: border-box;
`

const OpponentProfile = () => {
    return (
        <Wrapper>
            <ProfileInfo align="right" />
            <DisplayPhoto />
        </Wrapper>
    );
};

export default OpponentProfile;