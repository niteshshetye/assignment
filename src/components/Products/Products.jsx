import React from 'react';
import styled from 'styled-components';
import {mobile} from '../../responsive'
// data
import {popularProducts} from '../../data';

// component
import Product from './Product';

const Conatainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    ${mobile({padding: '10px 0px'})}
`

const Products = () => {
    return (
        <Conatainer>
            {popularProducts.map(product => <Product key={product.id} product={product} />)}
        </Conatainer>
    )
}

export default Products;
