# JavaScript Challenge 36 — Prototypes and Inheritance

### **Task: Prototype Chaining**
Demonstrate inheritance in JavaScript using constructor functions and prototype objects.

1. Create a constructor function `Animal` with a method `speak()` on its prototype that returns `"Animal speaking"`.
2. Create a constructor function `Dog`.
3. Set up the prototype chain so that `Dog` inherits from `Animal`.
4. Add a method `bark()` to the `Dog` prototype that returns `"Woof!"`.
5. Ensure the `Dog.prototype.constructor` correctly points to `Dog`.