import RulesActionTypes from '../../types/ui/rules'

const openRulesPanel = () => ({
    type: RulesActionTypes.OPEN_RULES_PANEL
})

const closeRulesPanel = () => ({
    type: RulesActionTypes.CLOSE_RULES_PANEL
})

export {
    openRulesPanel,
    closeRulesPanel
}