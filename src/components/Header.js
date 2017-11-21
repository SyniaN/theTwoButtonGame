import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    width: 100%;
    height: 75px;
    background-color: cornflowerblue;
    border-style: dotted;
    top: 0px;
    position: absolute;
`

export default class Header extends React.Component {

    render() {
        return (
            <Wrapper>
            </Wrapper>
        )
    }
}