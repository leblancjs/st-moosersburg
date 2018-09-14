import { combineReducers } from 'redux'
import players from './players'
import games from './games'
import messages from './messages'

export default combineReducers({
    players,
    games,
    messages
})