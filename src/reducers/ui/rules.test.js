import reducer from './rules'
import { RulesActions } from '../../actions/ui'

describe('ui/rules Reducer', () => {
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

    it('should return state with rules panel open', () => {
        expect(
            reducer(
                INITIAL_STATE,
                RulesActions.openRulesPanel()
            )
        ).toEqual({
            panel: {
                open: true
            }
        })
    })

    it('should return state with rules panel closed', () => {
        expect(
            reducer(
                {
                    panel: {
                        open: true
                    }
                },
                RulesActions.closeRulesPanel()
            )
        ).toEqual({
            panel: {
                open: false
            }
        })
    })
})