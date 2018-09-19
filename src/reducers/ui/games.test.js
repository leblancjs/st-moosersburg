import reducer from './games'
import { GamesActions } from '../../actions/ui'

describe('ui/games Reducer', () => {
    const INITIAL_STATE = reducer(undefined, {})

    it('should return initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            filters: {
                panel: {
                    open: false
                },
                visibility: {
                    public: true,
                    private: true
                },
                creator: ''
            }
        })
    })

    it('should return state with filters panel open', () => {
        expect(
            reducer(
                INITIAL_STATE,
                GamesActions.openFiltersPanel()
            )
        ).toEqual({
            filters: {
                ...INITIAL_STATE.filters,
                panel: {
                    open: true
                }
            }
        })
    })

    it('should return state with filters panel closed', () => {
        expect(
            reducer(
                {
                    filters: {
                        ...INITIAL_STATE.filters,
                        panel: {
                            open: true
                        }
                    }
                },
                GamesActions.closeFiltersPanel()
            )
        ).toEqual({
            filters: {
                ...INITIAL_STATE.filters,
                panel: {
                    open: false
                }
            }
        })
    })

    it('should return state with public visibility filter toggled', () => {
        expect(
            reducer(
                INITIAL_STATE,
                GamesActions.togglePublicVisibilityFilter()
            )
        ).toEqual({
            filters: {
                ...INITIAL_STATE.filters,
                visibility: {
                    public: false,
                    private: true
                }
            }
        })
    })

    it('should return state with private visibility filter toggled', () => {
        expect(
            reducer(
                INITIAL_STATE,
                GamesActions.togglePrivateVisibilityFilter()
            )
        ).toEqual({
            filters: {
                ...INITIAL_STATE.filters,
                visibility: {
                    public: true,
                    private: false
                }
            }
        })
    })

    it('should return state with creator filter set', () => {
        const CREATOR = 'creator'

        expect(
            reducer(
                INITIAL_STATE,
                GamesActions.setCreatorFilter(CREATOR)
            )
        ).toEqual({
            filters: {
                ...INITIAL_STATE.filters,
                creator: CREATOR
            }
        })
    })
})