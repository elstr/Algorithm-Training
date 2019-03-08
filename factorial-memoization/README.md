# Memoized Factorial 

* First calculate !6 (720 = 6 * 5 * 4 * 3 * 2 * 1)
* Save !6 in cache
* Then calculate !12 ( 12 * 11 * 10 * 9 * 8 * 7 * !6) => !6 was prev. cached :heart:


Memoization is a powerfull technique for performance. </br>
Use `console.time` to check how much time it takes to calculate 6th factorial and compare agains 12. </br>

```
console.time("factorial-6")
factorial(6)
console.timeEnd("factorial-6")
console.log("--------------------------------------")
console.time("factorial-12")
factorial(12)
console.timeEnd("factorial-12")
```

