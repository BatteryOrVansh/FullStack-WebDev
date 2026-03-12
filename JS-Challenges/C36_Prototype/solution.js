/**
 * JavaScript Challenge 36 — Prototypes and Inheritance
 * Solution by Vansh Dixit
 */

// Step 1: Define the Animal constructor
function Animal() {}

// Step 2: Add method to Animal's prototype
Animal.prototype.speak = function() {
    return `Animal speaking`;
};

// Step 3: Define the Dog constructor
function Dog() {}

// Step 4: Inherit from Animal
// We create a new object that links to Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Step 5: Fix the constructor reference
Dog.prototype.constructor = Dog;

// Step 6: Add method specifically to Dog
Dog.prototype.bark = function() {
    return `Woof!`;
};

// --- Test Cases ---
const myDog = new Dog();

console.log("Dog says:", myDog.bark());  // Output: Woof!
console.log("Dog also says:", myDog.speak()); // Output: Animal speaking (Inherited)

// Checking the chain
console.log("Is myDog an instance of Dog?", myDog instanceof Dog);
console.log("Is myDog an instance of Animal?", myDog instanceof Animal);