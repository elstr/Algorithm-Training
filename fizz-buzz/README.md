# FizzBuzz
* Print numbers from 1 to n  
* For multiples of 3 print Fuzz
* For multiples of 5 print Buzz 
* For multiples of 3 and 5 print FizzBuzz 

#### E.g.: 1 to 15

```
    1
    2
    Fizz
    4
    Buzz
    Fizz
    ...
    14
    FizzBuzz
```

## Steps
1. Build it as it is => for loop with if/else if/else
2. Make it better => Use expressions! `const isFizz = i % 3 === 0`
3. Make it better => No extra `console.logs`, use `result`
4. More functional approach => *Don't mutate result*

#### Mutating result approach
```
    let result;
    if (isFizz && isBuzz) {
        result = "FizzBuzz"
    }
    else if (isFizz) {
        result = "Fizz"
    }
    else if (isBuzz) {
        result = "Buzz"
    }
    else {
        result = i
    }
    console.log(result)
```

#### FP approach 
```
    const result =
        isFizz && isBuzz ? "FizzBuzz"
            : isFizz
                ? "Fizz"
                : isBuzz
                    ? "Buzz"
                    : i
    console.log(result)
```
        
### Disclaimer
To be able to write a test for the FizzBuzz, I'm building a string to compare to: <br/>
`1 2 Fizz Fizz Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz`
