import React from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.div`
    width: 100%;
    color: red;
    height: 50px;
    background-color: #ccc;
    border-style: dotted;
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