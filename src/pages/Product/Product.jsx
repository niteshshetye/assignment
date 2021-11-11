import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {mobile} from '../../responsive'
import { useLocation } from 'react-router-dom';
import {publicRequest} from '../../utils/axiosConfig';

// redux
// import { addProduct } from '../../redux/cartRedux';
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/apiCalls';

// component
import Annoucement from '../../components/Annoucement/Annoucement';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import { getUserFromLocalStorage } from '../../utils/localStorageAccess';

const Conatainer = styled.div``
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({flexDirection: 'column'})};
`
const ImageContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: '60vh'})};
`
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-weight: 200;
    ${mobile({textAlign: 'center', paddingTop: '10px'})};
`
const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({textAlign: 'justify'})};
`
const Price = styled.span`
    font-weight: 100;
    font-size: 3rem;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 1.3rem;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;

`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    padding: 30px 0px;
    justify-content: space-between;
    ${mobile({width: "100%", padding: '20px 0px'})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &: hover{
        background-color: teal;
        color: white;
    }
`
const Loading = styled.h2`
    text-align: center;
    padding: 20px;
    font-size: 3rem;
`

const Product = () => {
    const dispatch = useDispatch()
    const {pathname} = useLocation();
    const _id = pathname.split('/')[2]
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('S');
    const {_id: userId} = getUserFromLocalStorage()

    useEffect(() => {
        const getSingleProduct = async() => {
            const {data} = await publicRequest(`/products/find/${_id}`)
            setProduct(data)
        }
        getSingleProduct();
    }, [_id]);

    const handleAddToCart = () => {
        addToCart(dispatch, {...product, quantity, color, size, userId})
        // dispatch(addProduct({...product, quantity, color, size}));
    }

    return (
        <Conatainer>
            <NavBar />
            <Annoucement />
                {
                    Object.keys(product).length === 0? <Loading>Loading...!</Loading>: (
                        <Wrapper>
                            <ImageContainer>
                                <Image src={product.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{product.title}</Title>
                                <Desc>{product.desc}</Desc>
                                <Price>$ {product.price}</Price>
                                <FilterContainer>
                                    <Filter>
                                        <FilterTitle>Color: </FilterTitle>
                                        {
                                            product.color.map(color => <FilterColor color={color} key={color} onClick={() => setColor(color)} />)
                                        }
                                    </Filter>
                                    <Filter>
                                        <FilterTitle>Size: </FilterTitle>
                                        <FilterSize onChange={(e) => setSize(e.target.value)}>
                                            {
                                                product.size.map(size => <FilterSizeOption key={size} >{size}</FilterSizeOption>)
                                            }
                                        </FilterSize>
                                    </Filter>
                                </FilterContainer>
                                <AddContainer>
                                    <AmountContainer>
                                        <i className="fa-solid fa-minus" onClick={() => quantity > 1 && setQuantity(quantity-1)}></i>
                                        <Amount>{quantity}</Amount>
                                        <i className="fa-solid fa-plus" onClick={() => setQuantity(quantity+1)}></i>
                                    </AmountContainer>
                                    <Button onClick={handleAddToCart}>ADD TO CART</Button>
                                </AddContainer>
                            </InfoContainer>
                        </Wrapper>
                )
            }
                
            <NewsLetter />
            <Footer />
        </Conatainer>
    )
}

export default Product;
