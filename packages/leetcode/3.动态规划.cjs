// function fib(n) {
//   let num1 = 0,
//     num2 = 1;
//   for (let i = 0; i < n; i++) {
//     [num1, num2] = [num2, num2 + num1];
//   }

//   return num1;
// }

// function fib(n) {
//   const cache = [];

//   const fn = (n) => {
//     if (cache[n] !== undefined) return cache[n];
//     const value = n < 2 ? n : fib(n - 1) + fib(n - 2);
//     cache[n] = value;
//     return value;
//   };

//   return fn(n);
// }

console.log(fib(48));
