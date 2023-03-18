export default defineNuxtRouteMiddleware((to, from) => {
    const userIsLoggedIn = true
    if(!userIsLoggedIn) {
        return navigateTo({path: '/login'})  // name: 'login'
    }
})
