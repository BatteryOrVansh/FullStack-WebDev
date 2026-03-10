/**
 * JavaScript Challenge 33 — Loops
 * Solution by Vansh Dixit
 */

// Task 1: Sum of first N natural numbers
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Task 2: Multiplication table in string format
function printMultiplicationTable(n) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        let inst = `${n} * ${i} = ${n * i}`;
        arr.push(inst);
    }
    return arr;
}

// Task 3: Count vowels (Case-insensitive)
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let alph of str) {
        if (vowels.includes(alph)) {
            count++;
        }
    }
    return count;
}

// --- Test Cases ---
console.log("Sum of first 5 numbers:", sumOfN(5)); // Expected: 15
console.log("Table of 7:", printMultiplicationTable(7));
console.log("Vowel count in 'JavaScript':", countVowels("JavaScript")); // Expected: 3
console.log("Vowel count in 'Eminem':", countVowels("Eminem")); // Expected: 3