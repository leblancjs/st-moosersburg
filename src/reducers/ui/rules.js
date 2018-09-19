import RulesActionTypes from '../../types/ui/rules'

const initialState = {
    panel: {
        open: false
    }
}

const rules = (state = initialState, action) => {
    switch (action.type) {
        case RulesActionTypes.OPEN_RULES_PANEL:
            return {
                panel: {
                    open: true
                }
            }
        case RulesActionTypes.CLOSE_RULES_PANEL:
            return {
                panel: {
                    open: false
                }
            }
        default:
            return state
    }
}

export default rules