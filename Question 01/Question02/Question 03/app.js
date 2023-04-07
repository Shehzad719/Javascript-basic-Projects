//****five numbers in five prompts******/

let num1 = prompt("Enter your first number");
let num2 = prompt("Enter your second number");
let num3 = prompt("Enter your third number");
let num4 = prompt("Enter your four number");
let num5 = prompt("Enter your five number");


//*****If else condition here****/

let userNumber = num1;

if (num2 > userNumber) {
  userNumber = num2;
}

if (num3 > userNumber) {
  userNumber = num3;
}

if (num4 > userNumber) {
  userNumber = num4;
}

if (num5 > userNumber) {
  userNumber = num5;
}

console.log("Your largest number is " + userNumber);