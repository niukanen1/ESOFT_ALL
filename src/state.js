import { proxy } from 'valtio'
const userState = proxy({ 
    curUserEmail: "", 
    loggedIn: false,
})

export { userState }