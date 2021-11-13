// actions 
import { loginFaild, loginStart, loginSuccess } from "../userRedux"
import {addToCartStart,addedToCart,addToCartFaild} from '../cartRedux'
import {loadProducts, loadProductsSuccess, loadProductsFaild} from '../productsRedux'
import { getUsersStart, getUsersFaild, getUsersSuccess, deleteUserStart, deleteUserFaild, deleteUserSuccess, editUserStart, editUserFaild, editUserSuccess } from "../adminRedux"

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
        const {userId, ...insideCart} = products
        dispatch(addedToCart(insideCart));
        // const res = await userRequest.post('/cart', {userId, insideCart: {...insideCart}});
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

export const loadAllUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try{
        const {data} = await userRequest('/users') 
        const originalUsers = data.filter(user => user.isAdmin !== true)
        dispatch(getUsersSuccess(originalUsers))
    }catch(error){
        console.log(error);
        dispatch(getUsersFaild())
    }
}

export const deletUser = async (dispatch, id) => {
    dispatch(deleteUserStart());
    try{
        await userRequest.delete(`/users/${id}`)
        dispatch(deleteUserSuccess(id));
    }catch(error){
        console.log(error);
        dispatch(deleteUserFaild());
    }
}

export const editUser = async (dispatch, id, user) => {
    dispatch(editUserStart());
    try{
        const {data} = await userRequest.put(`/users/${id}`, user)
        dispatch(editUserSuccess(data))
    }catch(error){
        console.log(error);
        dispatch(editUserFaild())
    }
}