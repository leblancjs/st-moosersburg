import { openFiltersPanel, closeFiltersPanel, togglePublicVisibilityFilter, togglePrivateVisibilityFilter, setCreatorFilter } from './games'
import GamesActionTypes from '../../types/ui/games'

describe('ui/games Actions', () => {
    it('openFiltersPanel', () => {
        expect(
            openFiltersPanel()
        ).toEqual({
            type: GamesActionTypes.OPEN_FILTERS_PANEL
        })
    })

    it('closeFiltersPanel', () => {
        expect(
            closeFiltersPanel()
        ).toEqual({
            type: GamesActionTypes.CLOSE_FILTERS_PANEL
        })
    })

    it('togglePublicVisibilityFilter', () => {
        expect(
            togglePublicVisibilityFilter()
        ).toEqual({
            type: GamesActionTypes.TOGGLE_PUBLIC_VISIBILITY_FILTER
        })
    })

    it('togglePrivateVisibilityFilter', () => {
        expect(
            togglePrivateVisibilityFilter()
        ).toEqual({
            type: GamesActionTypes.TOGGLE_PRIVATE_VISIBILITY_FILTER
        })
    })

    it('setCreatorFilter', () => {
        const CREATOR = 'myCreator'

        expect(
            setCreatorFilter(CREATOR)
        ).toEqual({
            type: GamesActionTypes.SET_CREATOR_FILTER,
            creator: CREATOR
        })
    })
})