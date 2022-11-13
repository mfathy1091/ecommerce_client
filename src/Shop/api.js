import axios from 'axios'

const TOKEN = ""
const BASE_URL = "http://localhost:5000/api"

export const publicAxios = axios.create({
  baseURL: BASE_URL
})

export const userAxios = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})