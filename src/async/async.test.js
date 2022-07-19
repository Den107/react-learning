const Async = require('./async.js')

describe('Async print', () => {
    test('resolve value', async () => {
        const result = await Async.print('string')
        expect(result).toBe('string')
    })
    test('reject value', () => {
        return Async.print().catch(err => {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(err).toBeInstanceOf(Error)
        })
    })
})