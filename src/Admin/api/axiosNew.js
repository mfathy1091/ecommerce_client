import axios from 'axios';

// axios.defaults.baseURL = `http://localhost:5000/api`
const BASE_URL = `http://localhost:5000/api`

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
})


export const axiosPrivate = axios.create({
	baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

/* 
this is to ensure sending only one request to 'refresh-token'

*/
let refresh = false;



axiosPrivate.interceptors.response.use( 
  // if no error return the response
  response => response, 
  
  
  async error => {
    // if error === 401, get new accessToken, attach it, and resend the failed request
  if (error.response.status === 401 && !refresh) {
    refresh = true;
    const res = await axiosPrivate.post('refresh-token', {}, {withCredentials: true});

    if (res.status === 200) {
      axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${res.data['accessToken']}`
    
      return axiosPrivate(error.config)  // resend the failed request again
    }
  }
  refresh = false;

  return error;  // return the error, if not 401
})


/*
EXAMPLE
======== 
1- calling to get products and access token expired
2- res status is 401
3- send request to 'refresh-token' to get a new accessToken
4- update the authorization header with the new accessToken
5- resnd the faild request again and get the products
*/


/*
Send refreshToken (set withCredentials header) only when needed only in 3 requests:
  1-	Login => to get new refreshToken
  2-	refresh-token => to get new accessToken 
  3-	logout => to remove refreshToken from DB
*/