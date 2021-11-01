import React from 'react';
import styled from 'styled-components';
import {mobile} from '../../responsive'

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
    ${mobile({margin: '20px'})};
`
const FilterContainer = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({margin: '10px', textAlign: 'center'})};
`
const FilterText = styled.span`
    font-size: 1.3rem;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({fontSize: '1rem'})};
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({padding: '4px', marginRight: '5px'})};
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
                    <Select defaultValue={'DEFAULT'}>
                        <Option disabled value="DEFAULT">Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select defaultValue={'DEFAULT'}>
                        <Option disabled value="DEFAULT">Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select defaultValue={'DEFAULT'}>
                        <Option disabled value="DEFAULT">Newest</Option>
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
