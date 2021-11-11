// actions 
import { loginFaild, loginStart, loginSuccess } from "../userRedux"
import {addToCartStart,addedToCart,addToCartFaild} from '../cartRedux'
import {loadProducts, loadProductsSuccess, loadProductsFaild} from '../productsRedux'

// api calls utils
import {publicRequest, userRequest} from '../../utils/axiosConfig'

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data))
    }catch(error){
        console.log(error);
        dispatch(loginFaild())
    }
}

export const addToCart = async (dispatch, products) => {
    dispatch(addToCartStart());
    try{
        const res = await userRequest.post('/cart', {userId: products.userId, products: [{productId: products._id, quantity: products.quantity}]});
        console.log('cart Responce', res)
        dispatch(addedToCart(products))
    }catch(error){
        console.log(error);
        dispatch(addToCartFaild())
    }
}

export const loadAllProducts = async (dispatch, categories = null) => {
    dispatch(loadProducts());
    try{
        const res = await publicRequest(categories !== null? `/products?categories=${categories}` : `/products`)
        dispatch(loadProductsSuccess(res.data));
    }catch(error){
        console.log(error);
        dispatch(loadProductsFaild());
    }
}