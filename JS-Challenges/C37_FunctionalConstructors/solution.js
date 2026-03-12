/**
 * JavaScript Challenge 37 — Functional Constructors and Errors
 * Solution by Vansh Dixit
 */

function Person(name, age) {
    // Task 2: Validation / Error Handling
    if (age <= 0) {
        throw new Error("Age must be a positive number");
    }

    this.name = name;
    this.age = age;

    // Task 1: Method definition
    this.greet = function() {
        return `Hello, my name is ${this.name}`;
    };
}

// --- Test Cases ---

// Successful creation
try {
    const user = new Person("Vansh", 21);
    console.log(user.greet()); // Output: Hello, my name is Vansh
} catch (error) {
    console.error(error.message);
}

// Triggering the error
try {
    const invalidUser = new Person("Junior", -5);
} catch (error) {
    console.log("Caught expected error:", error.message); // Output: Age must be a positive number
}