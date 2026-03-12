# JavaScript Challenge 37 — Functional Constructors and Errors

### **Task 1: Create a Functional Constructor**
Create a constructor function `Person` that accepts `name` and `age` as parameters. Inside the constructor, define a method `greet()` that returns a string: `"Hello, my name is [name]"`.

### **Task 2: Handle Errors**
Implement validation logic within the `Person` constructor. If the `age` provided is not a positive number (0 or less), the function should throw a new `Error` with the message: `"Age must be a positive number"`.