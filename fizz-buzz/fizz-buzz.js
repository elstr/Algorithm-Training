function fizzBuzz(n) {
    let total = ""
    for (let i = 1; i <= n; i++) {
        const isFizz = i % 3 === 0
        const isBuzz = i % 5 === 0
        const result =
            isFizz && isBuzz ? "FizzBuzz"
                : isFizz
                    ? "Fizz"
                    : isBuzz
                        ? "Buzz"
                        : i

        // This is just for test purpose, you can delete it :)
        total = total ? `${total} ${result}` : `${result}`
    }
    return total
}

module.exports = fizzBuzz