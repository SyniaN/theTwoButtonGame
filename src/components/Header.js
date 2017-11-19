import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    width: 100%;
    color: red;
    height: 75px;
    background-color: #ccc;
    border-style: dotted;
    top: 0px;
`

export default class Header extends React.Component {

    render() {

        return (
            <Wrapper>
                <p>This is my header</p>
            </Wrapper>
        )
    }
}