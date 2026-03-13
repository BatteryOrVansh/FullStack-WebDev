// example 1
document.getElementById("changeTextButton").addEventListener('click', () => {
    document.getElementById("myParagraph").textContent = "you are a bad girl";
});

// example 2
document.getElementById("highlightFirstCity").addEventListener('click', () => {
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight")
});

// example 3
document.getElementById("changeOrder").addEventListener('click', () => {
    document.getElementById("coffeeType").textContent = "Espresso";
});

// example 4
document.getElementById("addNewItem").addEventListener('click', () => {
    let newItem = document.createElement('li');
    newItem.textContent = "Butter";

    let shoppingList = document.getElementById("shoppingList");
    shoppingList.appendChild(newItem);
    
})

// example 5
document.getElementById("removeLastTask").addEventListener('click', () => {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
})