import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../responsive'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    letter-spacing: 2px;
    ${mobile({fontSize: '0.7rem', fontWeight: '300'})};
`

const Annoucement = () => {
    return (
        <Container>Super Deal! Free Shipping On Order Over 50$</Container>
    )
}

export default Annoucement
