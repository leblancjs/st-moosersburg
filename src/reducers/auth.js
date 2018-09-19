import AuthActionTypes from '../types/auth'

const initialState = {
    loggedIn: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case AuthActionTypes.LOG_IN:
            return {
                loggedIn: true
            }
        case AuthActionTypes.LOG_OUT:
            return {
                loggedIn: false
            }
        default:
            return state
    }
}

export default auth