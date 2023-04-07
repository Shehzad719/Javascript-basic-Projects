//*****Prompt work will perform here with two numbers not string */

let userFirstNum1 = prompt("Enter your first number?");
let userFirstNum2 = prompt("Enter your second number?");

if (userFirstNum1 > userFirstNum2) {
    console.log(userFirstNum1 + " is larger number ");
  } else if (userFirstNum2 > userFirstNum1) {
    console.log(userFirstNum2 + " is larger number ");
  } else {
    console.log(" here is both numbers are equal.");
  }
