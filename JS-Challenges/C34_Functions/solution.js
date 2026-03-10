/**
 * JavaScript Challenge 34 — Higher-Order Functions and Arrow Functions
 * Solution by Vansh Dixit
 */

// Task 1: Square numbers using map
const squareNumbers = (arr) => arr.map(num => num * num);

// Task 2: Filter even numbers using filter
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Task 3: Sum positive numbers using filter and reduce
const sumPositiveNumbers = (arr) => 
    arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);

// Task 4: Extract names from an array of objects
const getNames = (arr) => arr.map(obj => obj.name);

// Task 5: Find the longest word using reduce
const findLongestWord = (arr) => 
    arr.reduce((acc, curr) => (acc.length >= curr.length ? acc : curr));

// --- Test Cases ---
console.log("Squares:", squareNumbers([2, 4, 6])); 
console.log("Evens:", filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log("Sum of Positives:", sumPositiveNumbers([-5, 10, -2, 20])); // Expected: 30
console.log("Names:", getNames([{ name: "Vansh" }, { name: "Harshit" }, { name: "Vikhyat" }]));
console.log("Longest Word:", findLongestWord(["React", "JavaScript", "NodeJS"])); // Expected: JavaScript