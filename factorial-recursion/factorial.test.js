const factorial = require('./factorial')
const number = 6
test('Test factorial', () => {
  expect(factorial(number)).toEqual(720)
})
