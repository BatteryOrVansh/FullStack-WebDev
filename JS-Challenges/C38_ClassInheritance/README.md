# JavaScript Challenge 38 — Classes, Objects, and Inheritance

### **Task 1: Class Inheritance**
Create a class `Vehicle` with:
- Properties: `make` and `model`.
- Method: `getDetails()` returning `"Make: [make], Model: [model]"`.

Create a subclass `Car` that extends `Vehicle` and adds:
- Method: `startEngine()` returning `"Engine started"`.

### **Task 2: Method Overriding**
Add a method `move()` to the `Vehicle` class that returns `"The vehicle is moving"`. Then, override this method in the `Car` class to return `"The car is driving"`.

### **Task 3: Static Methods**
Add a static method `isVehicle(obj)` to the `Vehicle` class. This method should check if a given object is an instance of `Vehicle` or its subclasses, returning `true` or `false` accordingly.