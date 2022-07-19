const reverseString = require('./reverseString.js')

describe('Reverse', () => {
    test('Reverse 1', () => {
        expect(reverseString('string')).toBe('gnirts')
    })
    test('Reverse 2', () => {
        expect(reverseString('one')).toBe('eno')
    })
    test('Reverse 3', () => {
        expect(reverseString('reverse')).toBe('esrever')
    })
    test('Reverse 4', () => {
        expect(reverseString('many')).toBe('ynam')
    })
    test('Reverse 5', () => {
        expect(reverseString('five')).toBe('evif')
    })
})

