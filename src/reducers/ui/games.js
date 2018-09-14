const initialState = {
    filters: {
        panel: {
            open: false
        },
        visibility: {
            public: true,
            private: true
        },
        creator: '',
        orderBy: 'lastCreated'
    }
}

const games = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default games