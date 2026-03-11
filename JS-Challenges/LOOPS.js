/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/
let n = 1;
let sum = 0;
while (n<=5){
    sum+=n;
    n++
}
console.log(sum)


/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/
let countdown = []
let m = 5;
while(m>=1){
    countdown.push(m);
    m--
}
console.log(countdown);


/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/
let teaCollection = [];
let tea;
do{
    tea = prompt(`Enter your fav tea type, enter "stop" to break`)
    if (tea != "stop" && tea != null ){
        teaCollection.push(tea);
    }
}while(tea != "stop");
console.log(teaCollection);


/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
*/
let total = 0;
let st = 1
do{
    total+=st;
    st++;
}while(st<=3);
console.log(total);


/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/
let arr = [2,4,6];
let multipliedNumbers = [];
for (let i = 0; i<arr.length; i++){
    multipliedNumbers[i] = arr[i]*2;
}
console.log(multipliedNumbers);


/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i<cities.length; i++){
    cityList.push(cities[i])
}
console.log(cityList);





/* 
7. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i<teas.length; i++){
    if (teas[i] == "chai"){
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);



/* 
8. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/
let city2 = ["London", "New York", "Paris", "Berlin"]
let visitedCities = [];
for (let i=0; i<city2.length; i++){
    if (city2[i] == "Paris"){
        continue;
    }
    visitedCities.push(city2[i]);
}
console.log(visitedCities);


/* 
9. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/
let narray = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (let num of narray) {
    if (num == 4) {
        break
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);


/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/
let tea2 = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (chai of tea2){
    if (chai == "herbal tea"){
        continue;
    }
    preferredTeas.push(chai);
}
console.log(preferredTeas);



/* 
11. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
*/
let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};
let cityPopulations = {};
for (const city in citiesPopulation) {
    if (city == "Berlin"){
        break;
    }
    cityPopulations[city] = citiesPopulation[city];
}
console.log(cityPopulations)



/* 
12. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities = {};
for (let city in worldCities) {
    if (worldCities[city]<3000000){
        continue;
    }
    largeCities[city] = worldCities[city];
}
console.log(largeCities);



/* 
13. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/
let ocha = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = [];
let stop = false;
ocha.forEach(function (tea){
    if (tea==="chai"){
        stop = true;
    }
    if (!stop){
        availableTeas.push(tea);
    }
})
console.log(availableTeas);



/* 
14. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
/* 
14. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let shehar = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
shehar.forEach((city) => {
    if (city === "Sydney"){
        return;
    }
    traveledCities.push(city)
})
console.log(traveledCities);


/* 
15. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let nums = [2,5,7,9];
let doubledNumbers = [];
for (let i=0; i<nums.length; i++){
    if (nums[i]===7){
        continue;
    }
    doubledNumbers.push(nums[i]*2)
}
console.log(doubledNumbers);


/* 
16. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/


