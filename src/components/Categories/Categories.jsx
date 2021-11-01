import React from 'react'
import styled from 'styled-components' 
import {categories} from '../../data'
import CategoryItem from './CategoryItem'
import {mobile} from '../../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-around;
    ${mobile({padding: '0', flexDirection: 'column'})}
`

const Categories = () => {
    return (
        <Container>
            {
                categories.map(item => <CategoryItem key={item.id} item={item} />)
            }
        </Container>
    )
}

export default Categories
