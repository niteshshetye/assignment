import React,{useState} from 'react';
import styled from 'styled-components';
import {mobile} from '../../responsive';
import { useLocation } from 'react-router-dom';

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
    const [filter, setFilter] = useState({})
    const [sort, setSort] = useState("newest")
    const {pathname} = useLocation();
    const categories = pathname.split('/')[2];

    const handleFilter = (e) => {
        const {name, value} = e.target
        setFilter({...filter, [name]: value})
    }

    return (
        <Conatainer>
            <NavBar />
            <Annoucement />
            <Title>Shop Now</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name='color' defaultValue='DEFAULT' onChange={handleFilter}>
                        <Option disabled value='DEFAULT'>Color</Option>
                        <Option>white</Option>
                        <Option>black</Option>
                        <Option>red</Option>
                        <Option>blue</Option>
                        <Option>yellow</Option>
                        <Option>green</Option>
                    </Select>
                    <Select name='size' defaultValue='DEFAULT' onChange={handleFilter}>
                        <Option disabled value='DEFAULT'>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select defaultValue={'newest'} onChange={e => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value='asc'>Price (asc)</Option>
                        <Option value='desc'>Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products 
                categories={categories} 
                filter={filter} 
                sort={sort} 
            />
            <NewsLetter />
            <Footer />
        </Conatainer>
    )
}

export default ProductList
