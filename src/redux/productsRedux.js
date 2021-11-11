import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isFetching: false,
        error: false
    }, 
    reducers: {
        loadProducts: (state) => {
            state.isFetching = true;
        },
        loadProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.products = [...action.payload];
        },
        loadProductsFaild: (state, action) => {
            state.isFetching = false;
            state.error = true;
        }
    }
});

export const {loadProducts, loadProductsSuccess, loadProductsFaild} = productsSlice.actions;
export default productsSlice.reducer;