const fizzBuzz = require("./fizz-buzz")
const number = 15
const result = `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz`

test("Test FizzBuzz of 15", () => {
    expect(fizzBuzz(number)).toEqual(result)
})