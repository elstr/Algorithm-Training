function isAnyPermutationPalindrome(str) {
    const unmatched = new Set()
    str.split('').forEach(char => {
        unmatched.has(char)
            ? unmatched.delete(char)
            : unmatched.add(char)
    })
    return unmatched.size <= 1
}
module.exports = isAnyPermutationPalindrome