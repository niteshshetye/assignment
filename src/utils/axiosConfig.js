import axios from 'axios';
import {getUserFromLocalStorage} from '../utils/localStorageAccess'

const BASE_URL = 'http://localhost:5000/api';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9s.eyJpZCI6IjYxODEyYzM3NWM0NWE5YjZlODQ3Nzg2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjYwOTM1MiwiZXhwIjoxNjM2ODY4NTUyfQ.ii9RtNs8U2MQJlf6yC_mrWBWRxODNeZmh_KbT5GNO9s'
const {user} = JSON.parse(localStorage.getItem('persist:root'))
const {currentUser} = JSON.parse(user);

let configHeader = {}
if(currentUser !== null) {
    const {accessToken: token} = getUserFromLocalStorage()
    configHeader={
        token: `Bearer ${token}`
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {...configHeader}
})