import React from 'react'
import styled from 'styled-components'

import AddProduct from '../components/AddProduct'
import ProductsInfo from '../components/ProductsInfo'
import UserInfo from '../components/UserInfo'

const Container = styled.div`
    flex: 5;
`

const DisplayInformation = ({display}) => {
    return (
        <Container>
            {
                display === 'userInfo' && <UserInfo />
            }
            {
                display === 'productInfo' && <ProductsInfo />
            }
            {
                display === 'addProduct' && <AddProduct />
            }
        </Container>
    )
}

export default DisplayInformation
