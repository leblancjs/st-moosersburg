import { NavigationActions } from '../../actions/ui/navigation'

const initialState = {
    currentPage: ''
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case NavigationActions.GO_TO_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}

export default navigation