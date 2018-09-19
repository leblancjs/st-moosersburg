import NavigationActionTypes from '../../types/ui/navigation'

const initialState = {
    currentPage: ''
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case NavigationActionTypes.GO_TO_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
}

export default navigation