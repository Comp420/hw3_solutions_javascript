/*
Homework 3 - JavaScript Fundamentals
COMP420 - Spring 2017
Task 2 - solutions

J. Wangsadinata
*/

/* 1 */
for (var i = 1; i <= 10; i++) {
  console.log(i);
}

/* 2 */
console.log(typeof("javascript"));
console.log(typeof(3));
console.log(typeof(4 + 5.5));
console.log(typeof(NaN));
console.log(typeof(true));
console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(null));
console.log(typeof(undefined));

/* 3 */
// Basic factorial function
function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive function
function factorial2(n) {
  if (n == 1) {
    return 1;
  }
  else {
    return n * factorial2(n - 1);
  }
}

// One-liner
function f(n){return((n>1)?n*f(n-1):n)}

/* 4 */
function isPalindrome(s) {
    s = s.replace(/\W/g, '').toLowerCase(); // convert things to lowercase and remove whitespaces
    return (s == s.split('').reverse().join('')); // construct the reverse of the string and check whether it is equal to the string
}