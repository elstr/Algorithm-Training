const isAnyPermutationPalindrome = require("./any-permutation-palindrome")
const civic = "civic"
const civil = "civil"
test("Test any permutation palindrome", () => {
    expect(isAnyPermutationPalindrome(civic)).toBe(true)
})
test("Test any permutation palindrome - false", () => {
    expect(isAnyPermutationPalindrome(civil)).toBe(false)
})