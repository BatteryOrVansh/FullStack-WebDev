/**
 * JavaScript Challenge 38 — Classes, Objects, and Inheritance
 * Solution by Vansh Dixit
 */

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }

    move() {
        return `The vehicle is moving`;
    }

    // Task 3: Static method to check instance
    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
}

class Car extends Vehicle {
    // Task 1: Subclass method
    startEngine() {
        return `Engine started`;
    }

    // Task 2: Method Overriding
    move() {
        return `The car is driving`;
    }
}

// --- Test Cases ---

const myVehicle = new Vehicle("Toyota", "Corolla");
const myCar = new Car("Tesla", "Model 3");

console.log(myVehicle.getDetails()); // Make: Toyota, Model: Corolla
console.log(myVehicle.move());       // The vehicle is moving

console.log(myCar.getDetails());     // Make: Tesla, Model: Model 3
console.log(myCar.startEngine());    // Engine started
console.log(myCar.move());           // The car is driving (Overridden)

// Testing Static Method
console.log("Is myCar a Vehicle?", Vehicle.isVehicle(myCar));     // true
console.log("Is a string a Vehicle?", Vehicle.isVehicle("Car"));  // false