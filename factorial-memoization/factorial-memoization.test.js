const factorial = require ('./factorial-memoization')
const first = 6 
const second = 12 // !12 = 12 * 11 * 10 * 9 * 8 * 7 * !6

test('Test factorial memoization', () => {
    expect(factorial(first)).toEqual(720)
    expect(factorial(second)).toEqual(479001600)
})