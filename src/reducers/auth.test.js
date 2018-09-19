import reducer from './auth'
import { AuthActions } from '../actions'

describe('auth Reducer', () => {
    const INITIAL_STATE = reducer(undefined, {})

    it('should return initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            loggedIn: false
        })
    })

    it('should return state with user logged in', () => {
        expect(
            reducer(
                INITIAL_STATE,
                AuthActions.logIn()
            )
        ).toEqual({
            loggedIn: true
        })
    })

    it('should return state with user logged out', () => {
        expect(
            reducer(
                {
                    loggedIn: true
                },
                AuthActions.logOut()
            )
        ).toEqual({
            loggedIn: false
        })
    })
})