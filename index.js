// Objective: Write a function to give me the sum of all numbers in an array.

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

const output = sumOfNumbers([336, 345, 678, 234, 34]);
console.log(output);
// result: 1624

// Objective 2: Create a function that will return only the even numbers.

function evenNumbers(numberss) {
  let even = [];
  for (const num of numberss) {
    if (num % 2 === 0) {
      even.push(num);
    }
  }
  return even;
}
const output2 = evenNumbers([12, 23, 34, 55, 13, 50, 34, 22]);
console.log(output2);
// result: [ 12, 34, 50, 34, 22 ]

// return the sum of even numbers

function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}
const output3 = sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(output3);

// result: 20;
