const readline = require('readline-sync');

console.log("Welcome to the Calculator!");
console.log("=============================");


console.log("Choose your first number");
const number1 = readline.prompt();

console.log("Choose your second number");
const number2 = readline.prompt();

const total = number1 * number2;
console.log("Your number is " + total)