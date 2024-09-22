/**
 Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

function multiply(a, b, c, d) {
  let multiplye = a * b * c * d;
  return multiplye;
}

const result1 = multiply(20, 5, 2, 1);
console.log(result1);

/**
 Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function oddEvenTask(number) {
  if (number % 2 !== 0) {
    let output = number * 2;
    return output;
  }
  if (number % 2 === 0) {
    let output2 = number / 2;
    return output2;
  }
}

const result2 = oddEvenTask(50);
// console.log(result2);

/**
 Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr, size) {
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }
  let avg = sum / size;
  return avg;
}

const numbers = [10, 20, 30, 40, 50];
const size = numbers.length;
const average = make_avg(numbers, size);
// console.log(average);
// result: 30;

/*
 Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(binaryStr) {
  let count = 0;
  //   let count2 = 0;
  for (const char of binaryStr) {
    if (char === "0") {
      count++;
    }
    // if (char === "1") {
    //   count2++;
    // }
  }
  return count;
  //   console.log(count, "zeros are here and", count2, "one are here");
}

const binaryString =
  "101011110001000111100001010101000001111100001010111011000101010001110";
const result4 = count_zero(binaryString);
// console.log(result4);
// result: 36

/**
 Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(number) {
  if (number % 2 === 0) {
    return "even";
  }
  if (number % 2 !== 0) {
    return "odd";
  }
}

const result = odd_even(6);
console.log(result);
