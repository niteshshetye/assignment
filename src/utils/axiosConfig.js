import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODEyYzM3NWM0NWE5YjZlODQ3Nzg2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjQ0Nzg2NywiZXhwIjoxNjM2NzA3MDY3fQ.y5tJ151yUEROkAH2qWZjdzFikCxg8xzFesDOrxPpm-0';

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${token}`
    }
})