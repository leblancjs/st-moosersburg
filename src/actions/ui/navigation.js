const NavigationActions = {
    GO_TO_PAGE: 'GO_TO_PAGE'
}

const goToPage = (page) => ({
    type: NavigationActions.GO_TO_PAGE,
    page
})

export { NavigationActions }

export default {
    goToPage
}