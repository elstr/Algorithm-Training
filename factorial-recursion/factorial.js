function factorial(n) {
    if (n === 1) return 1
    const result = n * factorial(n - 1)
    return result
    // return n * factorial(n - 1)
}

module.exports = factorial