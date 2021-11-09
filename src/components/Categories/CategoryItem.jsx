import React from 'react'
import styled from 'styled-components' 
import {Link} from 'react-router-dom'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    background-color: black;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
`
const Info = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 1.2rem;
    margin-bottom: 10px;
    letter-spacing: 3px;
    color: white;
`
const Button = styled.button`
    padding: 8px;
    font-size: 1rem;
    letter-spacing: 1px;
    font-weight: 500;
    background-color: teal;
    color: white;
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/productlist/${item.categories}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
