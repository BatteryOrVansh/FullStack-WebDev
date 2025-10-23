function stringToNumber(input) {
    let result = Number(input);
    if (isNaN(result)) {
        return "Not a number";
    }
    return result;
}

function flipBoolean(input) {
    return !Boolean(input);
}

function whatAmI(input) {
    return `I'm a ${typeof(input)}!`;
}

function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
}
