import axios from "axios";

const api = axios.create({
    baseURL: 'https://json-server-cinema.onrender.com'
})
export default api;