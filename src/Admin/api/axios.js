import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'
// import success from '@/interceptors/response/success.js'
// import failure from '@/interceptors/response/failure.js'

export default axios.create({
    baseURL: BASE_URL,
})

export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})


// HTTP.interceptors.response.use(success, failure)