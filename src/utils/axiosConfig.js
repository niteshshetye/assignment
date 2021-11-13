import axios from 'axios';
import {getUserFromLocalStorage} from '../utils/localStorageAccess'

const BASE_URL = 'http://localhost:5000/api';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9s.eyJpZCI6IjYxODEyYzM3NWM0NWE5YjZlODQ3Nzg2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjYwOTM1MiwiZXhwIjoxNjM2ODY4NTUyfQ.ii9RtNs8U2MQJlf6yC_mrWBWRxODNeZmh_KbT5GNO9s'
const {accessToken: token} = getUserFromLocalStorage()

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${token}`
    }
})