import React from 'react';
import styled from 'styled-components';

import NavBar from '../../components/NavBar/NavBar';
import Annoucement from '../../components/Annoucement/Annoucement';
import Products from '../../components/Products/Products';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import Footer from '../../components/Footer/Footer';

const Conatainer = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    text-align: center;
    margin: 30px;
`
const FilterContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Option = styled.option``

const ProductList = () => {
    return (
        <Conatainer>
            <NavBar />
            <Annoucement />
            <Title>Shop Now</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <NewsLetter />
            <Footer />
        </Conatainer>
    )
}

export default ProductList
