import reducer from './navigation'
import { NavigationActions } from '../../actions/ui/navigation';

describe('navigation', () => {
    const NEW_PAGE = 'NEW_PAGE'

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
        expect(
            reducer(
                undefined,
                {
                    type: NavigationActions.GO_TO_PAGE,
                    page: NEW_PAGE
                }
            )
        ).toEqual({
            currentPage: NEW_PAGE
        })
    })
})