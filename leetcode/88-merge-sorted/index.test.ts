// add test for merge
const {merge} = require('./index');
describe('merge', () => {
  it('should merge two sorted arrays', () => {
    expect(merge([1, 3, 5, 0, 0, 0], 3, [2, 4, 6], 3)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});