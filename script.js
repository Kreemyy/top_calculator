// Create functions for basic math operations

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstOperand;
let secondOperand;
let operator;

function operate(a, b, operator) {
  let result;
  if (operator === "+") {
    result = add(a, b);
  } else if (operator === "-") {
    subtract(a, b);
  } else if (operator === "*") {
    result = multiply(a, b);
  } else if (operator === "/") {
    result = divide(a, b);
  }

  return result;
}
