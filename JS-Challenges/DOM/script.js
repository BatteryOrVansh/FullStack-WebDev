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