import reducer from './lobby'
import { GamesActions } from '../../actions/ui'

describe('ui/lobby Reducer', () => {
    const INITIAL_STATE = reducer(undefined, {})

    it('should return initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            gameId: ''
        })
    })

    it('should return state with selected game ID', () => {
        const GAME_ID = 'myGameId'

        expect(
            reducer(
                INITIAL_STATE,
                GamesActions.selectGame(GAME_ID)
            )
        ).toEqual({
            gameId: GAME_ID
        })
    })
})