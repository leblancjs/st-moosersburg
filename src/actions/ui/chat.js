import ChatActionTypes from '../../types/ui/chat'

const openChatPanel = () => ({
    type: ChatActionTypes.OPEN_CHAT_PANEL
})

const closeChatPanel = () => ({
    type: ChatActionTypes.CLOSE_CHAT_PANEL
})

export {
    openChatPanel,
    closeChatPanel
}