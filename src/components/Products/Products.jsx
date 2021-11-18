import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {mobile} from '../../responsive';
import Spinner from '../Spinner';

// reducer api call
import { loadAllProducts } from '../../redux/apiCalls';
import { useDispatch } from 'react-redux';

// component
import Product from './Product';
import { useSelector } from 'react-redux';

const Conatainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    ${mobile({padding: '10px 0px'})}
`

const Products = ({categories = null, filter, sort}) => {
    const {products, isFetching} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const [filtredProducts, setFilterdProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try{
                loadAllProducts(dispatch, categories)
                
            }catch(error){
                console.log('featching data error', error)
            }
        }
        getProducts();
    }, [dispatch,categories]);

    useEffect(() => {
        categories && setFilterdProducts(products.filter(product => 
            Object.entries(filter).every(([key,value]) =>
                product[key].includes(value)
            )
        ))
    }, [products, filter, categories]);

    useEffect(() => {
        if(sort === 'newest'){
            setFilterdProducts(prev => [...prev].sort((a,b) => a.createdAt - b.createdAt));
        } else if(sort === 'asc'){
            setFilterdProducts(prev => [...prev].sort((a,b) => a.price - b.price));
        } else {
            setFilterdProducts(prev => [...prev].sort((a,b) => b.price - a.price));
        } 
    }, [sort])
    return (
        <Conatainer>
            {
                isFetching? <Spinner />: (
                    <>
                    {
                        categories? 
                            filtredProducts.map(product => <Product key={product._id} product={product} />)
                            : products.slice(0,8).map(product => <Product key={product._id} product={product} />)
                    }
                    </>
                )
            }
            
        </Conatainer>
    )
}

export default Products;
