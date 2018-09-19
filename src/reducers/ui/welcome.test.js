import reducer from './welcome'

describe('ui/welcome Reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({})
    })
})