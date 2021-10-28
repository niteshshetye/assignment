import React from 'react'
import styled from 'styled-components'

// cors
import { Badge } from '@material-ui/core'

// icons
import {Search} from '@material-ui/icons'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
const Center = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 2px solid lightgray;
    display: flex;
    border-radius: 10px;
    align-items: center;
`
const SearchInput = styled.input`
    border: none;
    outline: none;
    padding: 5px 10px;
    margin: 2px;
`
const Logo = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
`
const MenuItem = styled.div`
    font-size: 1.2rem;
    cursor: pointer;
`

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchInput type="text" />
                        <Search style={{color: "gray", paddingRight: 5}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-Commerce</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <i className="fas fa-shopping-cart"></i>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
