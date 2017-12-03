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

const PlayerProfile = () => {
    return (
        <Wrapper>
            <DisplayPhoto />
            <ProfileInfo align="left" />
        </Wrapper>
    );
};

export default PlayerProfile;