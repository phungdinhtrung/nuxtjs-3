const { isLoggedIn } = storeToRefs(useLoginStore())

export default defineNuxtRouteMiddleware((to, from) => {

    if(!isLoggedIn.value) return navigateTo({path: '/login'})  // name: 'login'
    
})
