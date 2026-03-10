/**
 * JavaScript Challenge 32 — Arrays and Methods
 * Solution by Vansh Dixit
 */

// Task 1: Filter only numbers from a mixed array
function filterNumbers(arr) {
    let res = [];
    for (let num of arr) {
        if (typeof(num) === "number") {
            res.push(num);
        }
    }
    return res;
}

// Task 2: Reverse the array
function reverseArray(arr) {
    return arr.reverse();
}

// Task 3: Find the maximum number
function findMax(arr) {
    return Math.max(...arr);
}

// Task 4: Remove duplicates using Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Task 5: Flatten nested arrays to any depth
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// --- Test Cases ---
const mixedData = [1, "hello", true, 42, "world", 7];
const nestedData = [1, [2, [3, [4]], 5]];
const duplicateData = [1, 2, 2, 3, 4, 4, 5];

console.log("Filtered Numbers:", filterNumbers(mixedData));
console.log("Reversed Array:", reverseArray([1, 2, 3, 4, 5]));
console.log("Max Value:", findMax([10, 5, 100, 25]));
console.log("No Duplicates:", removeDuplicates(duplicateData));
console.log("Flattened Array:", flattenArray(nestedData));