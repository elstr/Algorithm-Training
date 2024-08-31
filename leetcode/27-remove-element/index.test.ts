const {removeElement} = require('./index.ts')
describe('removeElement', () => {
  it('should remove the given number from the array and return the length of the array', () => {
    expect(removeElement([3,2,2,3], 3)).toEqual(2);
  });
});
