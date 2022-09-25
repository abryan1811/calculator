const readline = require('readline-sync');

console.log("Welcome to the Calculator!");
console.log("=============================");


console.log("Please type in your operator (add, subtract, divide or multiply):")
const operator = readline.prompt();

console.log("Choose your first number");
const number1 = +readline.prompt();

console.log("Choose your second number");
const number2 = +readline.prompt();

let total = 0

/*if (operator == "add") {
    total = number1 + number2;
} else if (operator == "subtract") {
    total = number1 - number2;
} else if (operator == "divide") {
    total = number1 / number2;
} else if (operator == "multiply") {
    total = number1 * number2;
} else {
    console.log("Not an option")
    const x = readline.prompt();
}*/

switch (operator){
    case "add":
    total = number1 + number2;
    break;
    case "subtract":
    total = number1 - number2; 
    break;
    case "divide":
    total = number1 / number2;
    break;
    case "multiply":
    total = number1 * number2;
    break;
    default:
        console.log("Not an option") 
}

console.log("Your number is " + total)