import axios from 'axios'


const API = import.meta.env.VITE_BACKEND_URL


const api_back = axios.create({
    baseURL: API
})


export default api_back


