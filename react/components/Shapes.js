import styled from 'styled-components';

export const Square = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${props => props.color ? props.color : "salmon"};
`

export const Circle = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${props => props.color ? props.color : "cornflowerblue"};
    border-radius: 50px;
`