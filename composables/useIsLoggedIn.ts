// Define

const useIsLoggedIn = () => useState<boolean>('isLoggedIn', () => false)


export {
    useIsLoggedIn
}