// Note: Không được đặt vào trong thư mục plugins vì đây là thư mục dir-structure của NuxtJS. Sử dụng để tạo mới các plugins.
import axios from 'axios';

const PROTOCAL      = import.meta.env.NUXT_PROTOCAL || 'http'
const HOST_SERVER   = import.meta.env.NUXT_HOST || 'localhost'
const PORT_SERVER   = import.meta.env.NUXT_PORT_SERVER || 1111
const API_PREFIX    = import.meta.env.NUXT_ENV === 'dev' ? '' : '/api'  
const ACCESS_TOKEN  = process.server ? '' : !!localStorage.getItem('ACCESS_TOKEN')

const axiosInstance = axios.create({

    baseURL: `${PROTOCAL}://${HOST_SERVER}:${PORT_SERVER}` + API_PREFIX,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Access-Control-Allow-Origin': '*'
    },
    timeout: 1000
})

export default axiosInstance;


