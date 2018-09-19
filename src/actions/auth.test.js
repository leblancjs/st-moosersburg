import { logIn, logOut } from './auth'
import AuthActionTypes from '../types/auth'

describe('auth Actions', () => {
    it('logIn', () => {
        expect(
            logIn()
        ).toEqual({
            type: AuthActionTypes.LOG_IN
        })
    })

    it('logOut', () => {
        expect(
            logOut()
        ).toEqual({
            type: AuthActionTypes.LOG_OUT
        })
    })
})