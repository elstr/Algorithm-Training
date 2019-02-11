const bubbleSort = require('./bubble-sort')
const list = [23, 4, 42, 15, 16, 8]
test('Test bubble-sort', () => {
  expect(bubbleSort(list)).toEqual([4, 8, 15, 16, 23, 42])
})
