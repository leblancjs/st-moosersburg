import GamesActionTypes from '../../types/ui/games'

const initialState = {
    gameId: ''
}

const game = (state = initialState, action) => {
    switch (action.type) {
        case GamesActionTypes.SELECT_GAME:
            return {
                gameId: action.gameId
            }
        default:
            return state
    }
}

export default game