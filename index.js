const readline = require('readline-sync');

console.log("Welcome to the Calculator!");
console.log("=============================");


console.log("Please type in your operator (add, subtract, divide or multiply):")
const operator = readline.prompt();

console.log("How many numbers do you want to " + operator + "?");
const calcQuantity = readline.prompt();
const interatedCalc = +calcQuantity;



let quantityOfNumbers = new Array(interatedCalc);
for (let i= 0; i < interatedCalc; i++) {
    console.log("Choose number " + (i + 1) + ":");
    const argument = +readline.prompt();
    quantityOfNumbers[i] = +argument;
}

let total = quantityOfNumbers[0];
for (let i= 0; i < interatedCalc; i++){
    switch (operator){
        case "add":
        total += quantityOfNumbers[i];
        break;
        case "subtract":
            total -= quantityOfNumbers[i];
        break;
        case "divide":
            total /= quantityOfNumbers[i];
        break;
        case "multiply":
            total *= quantityOfNumbers[i];
        break;
        default:
            console.log("Not an option") 
    }
}


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



console.log("Your number is " + total)