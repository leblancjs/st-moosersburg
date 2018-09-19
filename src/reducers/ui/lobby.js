import GamesActionTypes from '../../types/ui/games'

const initialState = {
    gameId: ''
}

const lobby = (state = initialState, action) => {
    switch (action.type) {
        case GamesActionTypes.SELECT_GAME:
            return {
                gameId: action.gameId
            }
        default:
            return state
    }
}

export default lobby