import GamesActionTypes from '../../types/ui/games'

const initialState = {
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
}

const games = (state = initialState, action) => {
    switch (action.type) {
        case GamesActionTypes.OPEN_FILTERS_PANEL:
            return {
                filters: {
                    ...state.filters,
                    panel: {
                        open: true
                    },
                    visibility: {
                        ...state.filters.visibility
                    }
                }
            }
        case GamesActionTypes.CLOSE_FILTERS_PANEL:
            return {
                filters: {
                    ...state.filters,
                    panel: {
                        open: false
                    },
                    visibility: {
                        ...state.filters.visibility
                    }
                }
            }
        case GamesActionTypes.TOGGLE_PUBLIC_VISIBILITY_FILTER:
            return {
                filters: {
                    ...state.filters,
                    panel: {
                        ...state.filters.panel
                    },
                    visibility: {
                        ...state.filters.visibility,
                        public: !state.filters.visibility.public
                    },
                }
            }
        case GamesActionTypes.TOGGLE_PRIVATE_VISIBILITY_FILTER:
            return {
                filters: {
                    ...state.filters,
                    panel: {
                        ...state.filters.panel
                    },
                    visibility: {
                        ...state.filters.visibility,
                        private: !state.filters.visibility.private
                    },
                }
            }
        case GamesActionTypes.SET_CREATOR_FILTER:
            return {
                filters: {
                    panel: {
                        ...state.filters.panel
                    },
                    visibility: {
                        ...state.filters.visibility
                    },
                    creator: action.creator
                }
            }
        default:
            return state
    }
}

export default games