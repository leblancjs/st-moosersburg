import reducer from './chat'
import { ChatActions } from '../../actions/ui'

describe('ui/chat Reducer', () => {
    const INITIAL_STATE = reducer(undefined, {})

    it('should return initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            panel: {
                open: false
            }
        })
    })

    it('should return state with chat panel open', () => {
        expect(
            reducer(
                INITIAL_STATE,
                ChatActions.openChatPanel()
            )
        ).toEqual({
            panel: {
                open: true
            }
        })
    })

    it('should return state with chat panel closed', () => {
        expect(
            reducer(
                {
                    panel: {
                        open: true
                    }
                },
                ChatActions.closeChatPanel()
            )
        ).toEqual({
            panel: {
                open: false
            }
        })
    })
})