import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        insideCart: {
            products: [],
            quantity: 0,
            total: 0
        },
        isAdding: false,
        error: false
    },
    reducers: {
        addToCartStart: (state) => {
            state.isAdding = true;
            state.error = false;
        },
        addedToCart: (state, action) => {
            state.isAdding = false;
            state.error = false;
            state.insideCart.quantity += 1;
            state.insideCart.products.push(action.payload);
            state.insideCart.total += action.payload.price * action.payload.quantity; 
        },
        addToCartFaild: (state) => {
            state.isAdding = false;
            state.error = true;
        },
        clearCart:(state) => {
            state.insideCart = {
                products: [],
                quantity: 0,
                total: 0
            }
        }
    }
})

// export reducer and default function
export const {addToCartStart, addedToCart, addToCartFaild, clearCart} = cartSlice.actions;
export default cartSlice.reducer;