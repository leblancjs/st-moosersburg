import { openRulesPanel, closeRulesPanel } from './rules'
import RulesActionTypes from '../../types/ui/rules'

describe('ui/rules Actions', () => {
    it('openRulesPanel', () => {
        expect(
            openRulesPanel()
        ).toEqual({
            type: RulesActionTypes.OPEN_RULES_PANEL
        })
    })

    it('closeRulesPanel', () => {
        expect(
            closeRulesPanel()
        ).toEqual({
            type: RulesActionTypes.CLOSE_RULES_PANEL
        })
    })
})