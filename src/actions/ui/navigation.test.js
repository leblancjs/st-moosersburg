import { goToPage } from './navigation'
import NavigationActionTypes from '../../types/ui/navigation'

describe('ui/navigation Actions', () => {
    const PAGE = 'myPage'

    it('should return a go to page action', () => {
        expect(
            goToPage(PAGE)
        ).toEqual({
            type: NavigationActionTypes.GO_TO_PAGE,
            page: PAGE
        })
    })
})