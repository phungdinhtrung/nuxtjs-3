// Note: Không được đặt vào trong thư mục plugins vì đây là thư mục đặc biệt của NuxtJS. Đặt vào cần wrap lại và chỉ sử dụng cho các components, không export sử dụng được trong file.ts.
import axios from 'axios';

const HOST_SERVER   = import.meta.env.NUXT_HOST || 'localhost'
const PORT_SERVER   = import.meta.env.NUXT_PORT_SERVER || 1111
const API_PREFIX    = import.meta.env.NUXT_ENV === 'dev' ? '' : '/api'  
const ACCESS_TOKEN  = process.server ? '' : !!localStorage.getItem('ACCESS_TOKEN')

const axiosInstance = axios.create({

    baseURL: `http://${HOST_SERVER}:${PORT_SERVER}` + API_PREFIX,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
})

export default axiosInstance;


