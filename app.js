// Calculator functions
const addition = (num1, num2) => {
    return num1 + num2;
}

const soustraction = (num1, num2) => {
    return num1 - num2;
}

const multiplication = (num1, num2) => {
    return num1 * num2;
}

const division = (num1, num2) => {
    return num1 / num2;
}

const convertToPercent = (num) => {
    return num / 100;
}

const toggleNegative = (input) => {
    if (input.indexOf("-") === 0) return input.replace("-", "");
    return `-${input}`;
}

const clearInputZone = () => {
    return "";
}

const setOperation = (input) => {
    return input;
}

const setInput = (input) => {
    return input
} 

const executeOperation = (input1, input2, operation) => {
    let result;
    switch (operation) {
        case "addition":
            result = addition(input1, input2);
            break;
        case "soustraction":
            result = soustraction(input1, input2);
            break;
        case "multiplication":
            result = multiplication(input1, input2);
            break;
        case "division":
            result = division(input1, input2);
            break;
    }

    return result;
}

// Variables
let tempValue;
let userInput;
let operation1;
let operation2;
let result;

// Select Buttons
const input = document.querySelector("input");
const inputButtons = document.querySelectorAll(".input");
const percentButton = document.querySelector("#percent");
const plusMinusButton = document.querySelector("#plusMinus");
const editButton = document.querySelector("#edit");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const soustractButton = document.querySelector("#soustract");
const addButton = document.querySelector("#add");
const equalButton = document.querySelector("#equal");
const resetButton = document.querySelector("#reset");

inputButtons.forEach((inputButton) => {
    inputButton.addEventListener("click", () => {
        input.value = "";
        if (tempValue === undefined) {
            tempValue = "";
            tempValue += inputButton.innerHTML;
            input.value = tempValue;
        } else {
            tempValue += inputButton.innerHTML;
            input.value = tempValue;
        }
    });
});

percentButton.addEventListener("click", () => {
    tempValue = convertToPercent(parseFloat(tempValue));
    input.value = isNaN(tempValue) ? "Erro" : tempValue.toString();
});

plusMinusButton.addEventListener("click", () => {
    tempValue = toggleNegative(tempValue);
    input.value = tempValue;
});

editButton.addEventListener("click", () => {
    tempValue = tempValue.replace(tempValue[tempValue.length - 1], "");
    input.value = tempValue;
});

divideButton.addEventListener("click", () => {
    if (userInput === undefined || operation1 === undefined) {
        operation1 = setOperation("division");
        userInput = input.value;
        tempValue = "";
    }
    else {
        operation2 = setOperation("division");
        result = executeOperation(parseFloat(userInput), parseFloat(tempValue), operation1);
        input.value = isNaN(result) ? "Error": result;
        userInput = result;
        tempValue = "";
        operation1 = operation2;
        operation2 = undefined;
    }
});

multiplyButton.addEventListener("click", () => {
    if (userInput === undefined || operation1 === undefined) {
        operation1 = setOperation("multiplication");
        userInput = input.value;
        tempValue = "";
    }
    else {
        operation2 = setOperation("multiplication");
        result = executeOperation(parseFloat(userInput), parseFloat(tempValue), operation1);
        input.value = isNaN(result) ? "Error": result;
        userInput = result;
        tempValue = "";
        operation1 = operation2;
        operation2 = undefined;
    }
});

soustractButton.addEventListener("click", () => {
    if (userInput === undefined || operation1 === undefined) {
        operation1 = setOperation("soustraction");
        userInput = input.value;
        tempValue = "";
    }
    else {
        operation2 = setOperation("soustraction");
        result = executeOperation(parseFloat(userInput), parseFloat(tempValue), operation1);
        input.value = isNaN(result) ? "Error": result;
        userInput = result;
        tempValue = "";
        operation1 = operation2;
        operation2 = undefined;
    }
});

addButton.addEventListener("click", () => {
    if (userInput === undefined || operation1 === undefined) {
        operation1 = setOperation("addition");
        userInput = input.value;
        tempValue = "";
    }
    else {
        operation2 = setOperation("addition");
        result = executeOperation(parseFloat(userInput), parseFloat(tempValue), operation1);
        input.value = isNaN(result) ? "Error": result;
        userInput = result;
        tempValue = "";
        operation1 = operation2;
        operation2 = undefined;
    }
});

equalButton.addEventListener("click", () => {
    result = executeOperation(parseFloat(userInput), parseFloat(tempValue), operation1);
    input.value = result;
    userInput = undefined;
    tempValue = undefined;
    operation1 = undefined;
    operation2 = undefined;
});

resetButton.addEventListener("click", () => {
    input.value = "";
    result = undefined;
    userInput = undefined;
    tempValue = undefined;
    operation1 = undefined;
    operation2 = undefined;
});