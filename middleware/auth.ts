export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = useIsLoggedIn()

    if(!isLoggedIn.value) return navigateTo({path: '/login'})  // name: 'login'
    
})
