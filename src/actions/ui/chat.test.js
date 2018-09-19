import { openChatPanel, closeChatPanel } from './chat'
import ChatActionTypes from '../../types/ui/chat'

describe('ui/chat Actions', () => {
    it('openChatPanel', () => {
        expect(
            openChatPanel()
        ).toEqual({
            type: ChatActionTypes.OPEN_CHAT_PANEL
        })
    })

    it('closeChatPanel', () => {
        expect(
            closeChatPanel()
        ).toEqual({
            type: ChatActionTypes.CLOSE_CHAT_PANEL
        })
    })
})