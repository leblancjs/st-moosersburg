import reducer from './navigation'
import { NavigationActions } from '../../actions/ui'

describe('ui/navigation Reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            currentPage: ''
        })
    })

    it('should return the initial state when passed action with unknown type', () => {
        expect(
            reducer(
                undefined,
                {
                    type: 'unknown'
                }
            )
        ).toEqual({
            currentPage: ''
        })
    })

    it('should return the new state with the new current page', () => {
        const NEW_PAGE = 'NEW_PAGE'

        expect(
            reducer(
                undefined,
                NavigationActions.goToPage(NEW_PAGE)
            )
        ).toEqual({
            currentPage: NEW_PAGE
        })
    })
})