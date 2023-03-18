export const useLoginStore = defineStore('LoginStore', () => {

// state
const isLoggedIn 		= ref(false)

// actions
const actLogin = async() => {
	isLoggedIn.value = true
}

const actLogout = () => {
    isLoggedIn.value = false
    return navigateTo({path: '/login'})
}

// getters


return { 
	actLogin, 
	actLogout,
	isLoggedIn,
}})