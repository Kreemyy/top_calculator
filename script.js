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

let firstOperand = "";
let secondOperand = "";
let operator = "";

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

let isSecondOperand = false;
let isFirstOperand = false;
let isOperating = false;

function updateExpression(number, isOperator, isFunctionKey) {
  if (firstOperand !== "" && operator === "" && isOperator) {
    operator = number;
    isOperating = true;
  }

  if (isOperating && !isOperator && !isFunctionKey) {
    secondOperand += number;
    isSecondOperator = true;
  } else if (!isOperator && !isFunctionKey) {
    firstOperand += number;
  }
}

const digitBtn = document.querySelector(".btns");
digitBtn.addEventListener("click", (event) => {
  const calculation = document.querySelector(".calculation");
  const operand = String(event.target.textContent);

  let isOperator = false;
  let isFunctionKey = false;

  if (
    operand === "-" ||
    operand === "+" ||
    operand === "×" ||
    operand === "÷"
  ) {
    isOperator = true;
  } else if (operand === "Clear" || operand == "Delete") {
    isFunctionKey = true;
  }

  updateExpression(operand, isOperator, isFunctionKey);

  console.log(
    `firstOp: ${firstOperand} Op: ${operator} secondOp: ${secondOperand}`,
  );
});
