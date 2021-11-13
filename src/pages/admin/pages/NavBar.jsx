import styled from 'styled-components'
import React from 'react'

import { useHistory } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-around;
    background-color: #FEF9EF;
    font-weight: 700;
    border-bottom: 0.5px solid gray;
`
const Left = styled.div``
const Center = styled.div``
const Heading = styled.h3`
    letter-spacing: 2px;
    font-size: 1rem;
    cursor: pointer;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0px;

`

const ListItem = styled.li`
    cursor: pointer;
    font-weight: 500;
    padding-right: 15px;
`
const Right = styled.div``

const NavBar = ({setDisplay}) => {
    const history = useHistory()
    return (
        <Nav>
            <Left>
                <Heading onClick={() => history.push('/')}>
                    Easy | Shop
                </Heading>
            </Left>
            <Center>
                <Heading>
                    Admin Panel
                </Heading>
            </Center>
            <Right>
                <List>
                    <ListItem onClick={() => setDisplay('userInfo')}>Users Info</ListItem>
                    <ListItem onClick={() => setDisplay('productInfo')}>Products Info</ListItem>
                    <ListItem onClick={() => setDisplay('addProduct')}>Add Products</ListItem>
                </List>
            </Right>
        </Nav>
    )
}

export default NavBar
