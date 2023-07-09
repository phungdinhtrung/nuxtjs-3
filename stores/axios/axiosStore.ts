import axiosInstance from "@/configs/axiosInstance"

export const useAxiosStore = defineStore('AxiosStore', () => {

// actions
const actGetResult = async() => {
    return await axiosInstance.get('https://jsonplaceholder.typicode.com/posts/1')
}


return { 
    actGetResult
}})

