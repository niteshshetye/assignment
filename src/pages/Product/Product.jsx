import React from 'react';
import styled from 'styled-components';
import Annoucement from '../../components/Annoucement/Annoucement';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import NewsLetter from '../../components/NewsLetter/NewsLetter';

const Conatainer = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImageContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 3rem;
`
const FilterContainer = styled.div``
const Filter = styled.div``
const FilterColor = styled.div``
const FilterTitle = styled.div``
const FilterSize = styled.div``
const FilterSizeOption = styled.div``
const FilterText = styled.div``

const Product = () => {
    return (
        <Conatainer>
            <NavBar />
            <Annoucement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet ducimus omnis non consequatur laborum id! Aliquam, corporis cupiditate laborum nam beatae, debitis placeat doloribus illo eveniet eligendi quo aspernatur!</Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black' />
                            <FilterColor color='darkgray'/>
                            <FilterColor color='gray'/>
                        </Filter>
                        <Filter>
                            <FilterText>Size</FilterText>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Conatainer>
    )
}

export default Product;
