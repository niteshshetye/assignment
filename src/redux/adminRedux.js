import { createSlice } from "@reduxjs/toolkit";

const adminReducer = createSlice({
    name: 'admin',
    initialState: {
        users: {
            allUsers: [],
            isFetching: false,
            error: false,
            isDeleting: false,
            idEditing: false
        },
        addProduct: {
            product: {},
            isAdding: false,
            error: false
        }
    },
    reducers: {
        getUsersStart: (state) => {
            state.users.isFetching = true;
        },
        getUsersSuccess: (state, action) => {
            state.users.isFetching = false;
            state.users.error = false;
            state.users.allUsers = [...action.payload];
        },
        getUsersFaild: (state) => {
            state.users.isFetching = false;
            state.users.error = true;
        },
        deleteUserStart: (state) => {
            state.users.isDeleting = true;
        },
        deleteUserSuccess: (state, action) => {
            state.users.isDeleting = false;
            state.users.error = false;
            let remainingUsers = state.users.allUsers.filter(user => user._id !== action.payload);
            state.users.allUsers = [...remainingUsers];
        },
        deleteUserFaild: (state) => {
            state.users.isDeleting = false;
            state.users.error = true;
        },
        editUserStart: (state) => {
            state.users.idEditing = true;
        },
        editUserSuccess: (state, action) => {
            state.users.isEditing = false;
            state.users.error = false;
            let remainingUsers = state.users.allUsers.filter(user => user._id !== action.payload._id);
            remainingUsers.push(action.payload);
            state.users.allUsers = [...remainingUsers];
        },
        editUserFaild: (state) => {
            state.users.idEditing = false;
            state.users.error = true;
        },
        addProductStart: (state) => {
            state.addProduct.isAdding = true;
        },
        addProductSuccess: (state, action) => {
            state.addProduct.isAdding = false;
            state.addProduct.error = false;
            state.addProduct.product = {...action.payload};
        },
        addProductFaild: (state) => {
            state.addProduct.isAdding = false;
            state.addProduct.error = true;
        }
    }
})

export const {getUsersStart, getUsersSuccess, getUsersFaild, deleteUserStart, deleteUserSuccess, deleteUserFaild, editUserStart, editUserSuccess, editUserFaild,addProductStart, addProductSuccess,addProductFaild} = adminReducer.actions;
export default adminReducer.reducer;