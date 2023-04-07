// Define the students' marks
const marks = [100, 90, 80, 70, 60];

// Calculate the average
const sum = marks.reduce((acc, curr) => acc + curr);
const avg = sum / marks.length;

// Assign a grade based on the average
let grade;
if (avg >= 90) {
  grade = 'A';
} else if (avg >= 80) {
  grade = 'B';
} else if (avg >= 70) {
  grade = 'C';
} else if (avg >= 60) {
  grade = 'D';
} else {
  grade = 'FAIL';
}

// Output the average and grade
// console.log(`Average: ${avg.toFixed(2)}`);
// console.log(`Grade: ${grade}`);


console.log(avg);
console.log(grade);