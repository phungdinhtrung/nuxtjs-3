// Note: Không được đặt vào trong thư mục plugins vì đây là thư mục đặc biệt của NuxtJS. Phải wrap lại.
import axios from 'axios';

const HOST          = import.meta.env.NUXT_HOSTNAME || 'localhost'
const PORT_SERVER   = import.meta.env.NUXT_PORT || 1111
const PREFIX        = import.meta.env.NUXT_DEV === 'dev' ? '' : '/api'        
const ACCESS_TOKEN  = ''  //localStorage.getItem('ACCESS_TOKEN') || 

const axiosInstance = axios.create({

    baseURL: `http://${HOST}:${PORT_SERVER}` + PREFIX,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${ACCESS_TOKEN}`
    }
})

export default axiosInstance;


