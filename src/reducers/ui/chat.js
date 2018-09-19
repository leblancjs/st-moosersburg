import ChatActionTypes from '../../types/ui/chat'

const initialState = {
    panel: {
        open: false
    }
}

const chat = (state = initialState, action) => {
    switch (action.type) {
        case ChatActionTypes.OPEN_CHAT_PANEL:
            return {
                panel: {
                    open: true
                }
            }
        case ChatActionTypes.CLOSE_CHAT_PANEL:
            return {
                panel: {
                    open: false
                }
            }
        default:
            return state
    }
}

export default chat