import React, {useEffect} from 'react'
import styled from 'styled-components'

import { loadAllProducts } from '../../../redux/apiCalls';
import { useDispatch,useSelector } from 'react-redux';
import Spinner from '../../../components/Spinner';

const Container = styled.div`
    padding: 20px;
`
const TopHeading = styled.h2`
    text-align: center;
`
const DisplayData = styled.div``
const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const ProductsInfo = () => {
    const {products, isFetching} = useSelector(state => state.products);
    const dispatch = useDispatch()

    useEffect(() => {
        loadAllProducts(dispatch)
    }, [])

    return (
        <Container>
            <TopHeading>
                Our Products
            </TopHeading>
            <DisplayData>
                {
                    isFetching? <Spinner />: (
                        <>
                        {
                            products.length === 0? <h2 style={{textAlign: 'center'}}>No Data Found</h2>: (
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">inStock</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(prduct => (
                                                <tr key={prduct._id}>
                                                    <th scope="row">{prduct._id}</th>
                                                    <td><Img src={prduct.img} /></td>
                                                    <td>{prduct.title}</td>
                                                    <td>{prduct.price}$</td>
                                                    <td>{prduct.inStock+''}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            )
                        }
                        </>
                    )
                }
            </DisplayData>
        </Container>
    )
}

export default ProductsInfo
