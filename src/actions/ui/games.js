import GamesActionTypes from '../../types/ui/games'

const openFiltersPanel = () => ({
    type: GamesActionTypes.OPEN_FILTERS_PANEL
})

const closeFiltersPanel = () => ({
    type: GamesActionTypes.CLOSE_FILTERS_PANEL
})

const togglePublicVisibilityFilter = () => ({
    type: GamesActionTypes.TOGGLE_PUBLIC_VISIBILITY_FILTER
})

const togglePrivateVisibilityFilter = () => ({
    type: GamesActionTypes.TOGGLE_PRIVATE_VISIBILITY_FILTER
})

const setCreatorFilter = (creator) => ({
    type: GamesActionTypes.SET_CREATOR_FILTER,
    creator
})

export {
    openFiltersPanel,
    closeFiltersPanel,
    togglePublicVisibilityFilter,
    togglePrivateVisibilityFilter,
    setCreatorFilter
}