// 169. Majority Element
// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
// Given an array nums of size n, return the majority element.


// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.


// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [3,2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums: number[]): number { 
  nums.sort((a,b) => b-a)[0]
  const totals: { [key: number]: number } = {}

  for(let i = 0; i < nums.length; i++ ){
    if(totals[nums[i]] === undefined) {
      totals[nums[i]] = 1
    } else { 
      totals[nums[i]] += 1
    }
  }

  let maxKey = Number(Object.keys(totals)[0]); 
  let maxValue = totals[maxKey];

  Object.keys(totals).map(k => {
    if(totals[Number(k)] > maxValue) {
      maxValue = totals[Number(k)]
      maxKey = Number(k)
    }
  })
  return maxKey

}
export {majorityElement}