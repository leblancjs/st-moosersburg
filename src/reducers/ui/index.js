import { combineReducers } from 'redux'
import navigation from './navigation'
import welcome from './welcome'
import games from './games'
import lobby from './lobby'
import game from './game'
import chat from './chat'
import rules from './rules'

export default combineReducers({
    navigation,
    welcome,
    games,
    lobby,
    game,
    chat,
    rules
})