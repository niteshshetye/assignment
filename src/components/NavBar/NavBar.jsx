import React from 'react'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { Link } from 'react-router-dom'

// redux
import {useSelector, useDispatch} from 'react-redux';
import {logoutUser} from '../../redux/userRedux'

// navigation
import {useHistory} from 'react-router-dom'

// cors
import { Badge } from '@material-ui/core'

// icons
import {Search} from '@material-ui/icons'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"} )}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: '10px 8px'} )}
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
    ${mobile({ display: 'none'} )}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ${mobile({flex: '2', justifyContent: 'space-evenly'} )}

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none'} )}
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
    ${mobile({ padding: '5px', width: "87px"} )}
`
const Logo = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    ${mobile({ fontSize: '0.8rem'} )}
`
const MenuItem = styled.div`
    font-size: 1.2rem;
    cursor: pointer;
    ${mobile({fontSize: '1rem'} )}
`
const Button = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1.2rem;
    ${mobile({fontSize: '1rem'} )}

`

const NavBar = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.insideCart.quantity);
    const {currentUser} = useSelector(state => state.user);
    
    const handleLogut = () => {
        dispatch(logoutUser());
        history.push('/login')
    }
    const handleAdmin = () => {
        history.push('/admin');
        console.log('admin hit...!');
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <SearchInput placeholder='Search' />
                        <Search style={{color: "gray", paddingRight: 5}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <Link to='/'>
                            E-Commerce
                        </Link>
                    </Logo>
                </Center>
                <Right>
                    {
                        currentUser !== null ? (
                            <MenuItem><Button onClick={handleLogut}>Logout</Button></MenuItem>
                        ): (
                            <MenuItem><Link to='/login'>Login</Link></MenuItem>
                        )
                    }
                    {
                        (currentUser !== null && currentUser.isAdmin === true) && <MenuItem><Button onClick={handleAdmin}>Admin Panel</Button></MenuItem>
                    }
                    <MenuItem>
                        <Badge badgeContent={currentUser !== null? quantity : 0} color="primary">
                            <Link to='/cart'>
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
