function isPalindrome(x) {
  // your code here
  return x.toLowerCase() == x.toLowerCase().split('').reverse().join("");
}

// Write a function "greet" that returns "hello world!"
function greet() {
  return "hello world!";
};

const sayHello = (name) => 'Hello' + ', ' + name;

const booleanToString = b => b === true ? "true" : "false";

function take(arr, n) {
  // Your code here
  return arr.slice(0, n)
}