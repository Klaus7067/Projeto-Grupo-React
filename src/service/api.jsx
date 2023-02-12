import axios from "axios";

const api = axios.create({
    baseURL: 'https://projeto-m3.onrender.com/'
})
export default api;