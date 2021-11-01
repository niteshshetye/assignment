import React from 'react'
import styled from 'styled-components';
import {mobile} from '../../responsive'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection: 'column'})};
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.div`
    margin: 20px 0px;
    font-weight: 500;
    ${mobile({textAlign: 'justify'})};
`
const SocialConatainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0px 20px;
    color: white;
    background-color: ${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.5s ease;
    letter-spacing: 1px;
    &: hover {
        color: teal;
    }
    ${mobile({textAlign: 'center'})};
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
`
const ContectItem = styled.div`
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`
const Space = styled.span`
    margin-right: 10px;
`
const Payment = styled.img`
    width: 50%;
`



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>E-Commerce</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente facilis consequatur, soluta, excepturi, a impedit vel minima unde quia numquam quam nam et. Deserunt, hic nam. Doloribus, sit necessitatibus.
                </Desc>
                <SocialConatainer>
                    <SocialIcon bg='rgb(0, 174, 255);'>
                        <i className="fab fa-twitter"></i>
                    </SocialIcon>
                    <SocialIcon bg='black'>
                        <i className="fab fa-github"></i>
                    </SocialIcon>
                    <SocialIcon bg='rgb(51, 51, 255);'>
                        <i className="fab fa-facebook"></i>
                    </SocialIcon>
                </SocialConatainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contect Details</Title>
                <ContectItem>
                    <i className="fas fa-map-marker-alt"></i><Space/>622 Dixie Path , South Tobinchester 98336
                </ContectItem>
                <ContectItem>
                    <i className="fas fa-phone"></i><Space/>+91 123 45 588
                </ContectItem>
                <ContectItem>
                    <i className="far fa-envelope"></i><Space/>contect@domain.com
                </ContectItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
