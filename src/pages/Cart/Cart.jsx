import React from 'react'
import styled from 'styled-components'
import {mobile} from '../../responsive'

// redux
import {useSelector} from 'react-redux'

// stripe
// import StripeCheckout from 'react-stripe-checkout'
// import {userRequest} from '../../utils/axiosConfig'

// components
import NavBar from '../../components/NavBar/NavBar'
import Annoucement from '../../components/Annoucement/Annoucement'
import Footer from '../../components/Footer/Footer'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/cartRedux'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: '10px'})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && "none"};
    background-color: ${props => props.type === 'filled'? 'rgb(1, 111, 129)': 'transparent'};
    color: ${props => props.type === 'filled'? 'white': 'black'};
    ${mobile({padding: '8px'})}

` 
const TopTexts = styled.div`
    ${mobile({display: 'none'})}
`
const TopText = styled.span`
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: underline;
`
const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    ${mobile({flexDirection: 'column', justifyContent: 'center'})}
`
const Info = styled.div`
    flex: 3;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Product = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})}

`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mobile({flexDirection: 'row', justifyContent: 'space-around', marginTop: '20px'})}
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span``
const Summary = styled.div`
    flex: 1;
    align-self: start;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 60vh;
    ${mobile({width: '100%'})}
`
const ProductAmountContainer = styled.div``
// const ProductAmount = styled.span`
//     margin: 20px;
// `
const ProductPrice = styled.div`
    margin-top: 15px;
    font-size: 2rem;
    font-weight: 300;
    ${mobile({fontSize: '1.2rem', marginTop: '0px'})}
`
const SummaryTitle = styled.h1`
    font-weight: 300;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === 'total' && "500"};
    font-size: ${props => props.type === 'total' && "1.7rem"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    padding: 5px;
    width: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    letter-spacing: 1px;
    background-color: teal;
    color: white;
    outline: none;
    border: 1px solid black;
    border-radius: 4px;
`
const QuantityTitle = styled.h3`
    font-weight: 300;
    text-align: center;
`

const Cart = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const {products, quantity, total} = useSelector(state => state.cart.insideCart);
    const {currentUser} = useSelector(state => state.user)
    

    const handleEmptyCart = () => {
        dispatch(clearCart())
    }

    const handleContinueShopping = () => {
        history.push('/')
    }
    return (
        <Container>
            <NavBar />
            <Annoucement />
            <Wrapper>
                <Title>Your Bag</Title>
                <TopContainer>
                    <TopButton type='filled' onClick={handleContinueShopping}>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag ({currentUser !== null && quantity})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type='filled' onClick={handleEmptyCart}>Empty Cart</TopButton>
                </TopContainer>
                    {
                        currentUser === null? <h3 style={{color: 'gray', textAlign: 'center'}}>Please Login To see Your Cart Products</h3> : (
                            <BottomContainer> 
                                <Info>
                                    {
                                        products.length === 0? <h2 style={{textAlign: 'center'}}>Your Cart is Empty</h2>: products.map(product => (
                                                <Product key={product._id}>
                                                    <ProductDetail>
                                                        <Image src={product.img} />
                                                        <Details>
                                                            <ProductName><b>Product: </b>{product.title}</ProductName>
                                                            <ProductId><b>Id: </b>{product._id}</ProductId>
                                                            <ProductColor color={product.color} />
                                                            <ProductSize><b>Size: </b>{product.size}</ProductSize>
                                                        </Details>
                                                    </ProductDetail>
                                                    <PriceDetail>
                                                        <ProductAmountContainer>
                                                            <QuantityTitle>Quantity: {product.quantity}</QuantityTitle>
                                                            {/* <i className="fas fa-minus"></i> */}
                                                            {/* <ProductAmount>{product.quantity}</ProductAmount> */}
                                                            {/* <i className="fas fa-plus"></i> */}
                                                        </ProductAmountContainer>
                                                        <ProductPrice>
                                                            ${product.price*product.quantity}
                                                        </ProductPrice>
                                                    </PriceDetail>
                                                </Product>
                                        ))
                                    }
                                    <Hr />                        
                                </Info>
                                <Summary>
                                    <SummaryTitle>Order Summary</SummaryTitle>
                                    <SummaryItem>
                                        <SummaryItemText>SubTotal </SummaryItemText>
                                        <SummaryItemPrice>$ {total}</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem>
                                        <SummaryItemText>Sipping Discount</SummaryItemText>
                                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryItem type='total'>
                                        <SummaryItemText >Total</SummaryItemText>
                                        <SummaryItemPrice>$ {total}</SummaryItemPrice>
                                    </SummaryItem>
                                    <SummaryButton>Checkout Now</SummaryButton>   
                                </Summary>
                            </BottomContainer>
                        )
                    }  
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart


/* 
<StripeCheckout
    name='E-Commerce'
    billingAddress
    shippingAddress
    description = {`Your Total is $${total}`}
    amount = {total*100}
    stripeKey={KEY}
    token={onToken}
>
</StripeCheckout> 
*/

// const [stripeToken, setStripeToken] = useState(null);
// const KEY = process.env.STRIPE_KEY;
// const onToken = token => {
//     setStripeToken(token)
// }
// useEffect(() => {
//     const makeRequest = async () => {
//         try{
//             const res = await userRequest.post('/checkout/payment', {
//                 tokenId: stripeToken.id,
//                 amount: 500,
//             });
//             console.log('res',res)
//             history.push('/success', {data: res.data})
//         }catch(error){
//             console.log(error);
//         }
//     }
//     stripeToken && makeRequest()
// }, [stripeToken, total, history]);