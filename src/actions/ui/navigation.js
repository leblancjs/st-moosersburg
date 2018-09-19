import NavigationActionTypes from '../../types/ui/navigation'

const goToPage = (page) => ({
    type: NavigationActionTypes.GO_TO_PAGE,
    page
})

export {
    goToPage
}