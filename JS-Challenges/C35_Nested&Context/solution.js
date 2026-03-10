/**
 * JavaScript Challenge 35 — Nested Functions and Context
 * Solution by Vansh Dixit
 */

// Task 1: Using 'this' to access object properties
const person = {
    name: "Hitesh",
    age: 19.5,
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
};

// Task 2: Implementing a nested function
function outer() {
    function inner() {
        return `Inner function called`;
    }
    return inner();
}

// --- Test Cases ---
console.log(person.introduce()); // Expected: Hi, my name is Hitesh and I am 19.5 years old
console.log(outer());            // Expected: Inner function called