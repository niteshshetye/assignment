import axios from 'axios';
import {getUserFromLocalStorage} from '../utils/localStorageAccess'

const BASE_URL = process.env.REACT_APP_URL;

const getToken = () => {
    try{
        const {user} = JSON.parse(localStorage.getItem('persist:root'))
        const {currentUser} = JSON.parse(user);
        if(currentUser !== null) {
            const {accessToken: token} = getUserFromLocalStorage()
            return `Bearer ${token}`
        }
    
    }catch(error){
        console.log('axiosConfig file: ', error)
        return `no token`
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: getToken(), "Content-Type": "application/json"}
})