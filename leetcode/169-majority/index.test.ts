const {majorityElement} = require('./index.ts')


describe('majorityElement', () => {
  it('should return the number that appears more times in the array', () => {
    expect(majorityElement([3,2,2,1,1,1,2,2])).toEqual(2);
  });
});