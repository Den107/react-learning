const validateValue = require('./validateValue.js')

test('Validate value', () => {
    expect(validateValue(50)).toBe(true)
})

describe('Validate value', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Less correct value', () => {
        expect(validateValue(-3)).toBe(false)
    })
    test('More correct value', () => {
        expect(validateValue(120)).toBe(false)
    })
    test('Frontier value 1', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Frontier value 2', () => {
        expect(validateValue(100)).toBe(true)
    })
})