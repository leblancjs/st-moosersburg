import AuthActionTypes from '../types/auth'

const logIn = () => ({
    type: AuthActionTypes.LOG_IN
})

const logOut = () => ({
    type: AuthActionTypes.LOG_OUT
})

export {
    logIn,
    logOut
}