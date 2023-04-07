// Iterate through the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of 3 and/or 5
    const isMultipleOfThree = i % 3 === 0;
    const isMultipleOfFive = i % 5 === 0;
  
    // Replace the number with "Fizz", "Buzz", or "FizzBuzz" as appropriate
    let output = '';
    if (isMultipleOfThree) {
      output += 'Fizz';
    }
    if (isMultipleOfFive) {
      output += 'Buzz';
    }
    if (!isMultipleOfThree && !isMultipleOfFive) {
      output += i;
    }
  
    // Output the result to the console
    console.log(output);
  }