const mergeSort = require('./merge-sort')
const list = [23, 4, 42, 15, 16, 8, 3, 1, 30]
test('Test merge-sort', () => {
  expect(mergeSort(list)).toEqual([1, 3, 4, 8, 15, 16, 23, 30, 42])
})
