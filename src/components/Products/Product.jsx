import React from 'react'
import styled from 'styled-components';

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: 3;
    background-color: rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1rem;
    transition: all 0.5s ease;

`
const Container = styled.div`
    flex = 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    position: relative;
    background-color: #f5fbfd;
    &: hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
    opacity: 0.8;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 3px;
    transition: all 0.5s ease;
    &: hover {
        background-color: rgb(228, 246, 253);
        transform: scale(1.1);
    }
`

const Product = ({product}) => {
    return (
        <Container>
            <Circle />
            <Image src={product.img} />
            <Info>
                <Icon>
                    <i className="fas fa-shopping-cart"></i>
                </Icon>
                <Icon>
                    <i className="fas fa-search"></i>
                </Icon>
                <Icon>
                    <i className="far fa-heart"></i>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product;
