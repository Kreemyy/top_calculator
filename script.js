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
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "×") {
    return multiply(a, b);
  } else if (operator === "÷") {
    if (b === 0) {
      clearCalculator();
      return alert("Can't divide by 0");
    } else {
      return divide(a, b);
    }
  }
}

let isOperating = false;
let previousResult = "";

function updateOperator(sign) {
  if (firstOperand !== "") {
    operator = sign;
    isOperating = true;
  }
}

function updateOperands(number, isOperator, isFunctionKey, decimalPoint) {
  if (!isFunctionKey && !isOperator) {
    if (firstOperand !== "" && isOperating) {
      if (secondOperand.includes(".") && number === ".") {
        return;
      }
      secondOperand += number;
    } else {
      if (firstOperand.includes(".") && number === ".") {
        return;
      }
      firstOperand += number;
    }
  }
}

function updateDisplay(firstOperand, operator, secondOperand, result) {
  const calculation = document.querySelector(".calculation");
  const answerElem = document.querySelector(".answer");

  calculation.textContent = `${firstOperand} ${operator} ${secondOperand}`;
  answerElem.textContent = result ? result : `${previousResult}`;
}

function clearCalculator() {
  firstOperand = "";
  secondOperand = "";
  operator = "";
  isOperating = false;
  previousResult = "";
  result = "";
}

const digitBtn = document.querySelector(".btns");
digitBtn.addEventListener("click", (event) => {
  const calculation = document.querySelector(".calculation");
  const operand = String(event.target.textContent);

  let isOperator = false;
  let isFunctionKey = false;

  if (operand === "Clear" || operand === "Delete" || operand === "=") {
    isFunctionKey = true;
  }

  if (
    operand === "-" ||
    operand === "+" ||
    operand === "×" ||
    operand === "÷"
  ) {
    if (
      (operand !== "×" || operand !== "÷") &&
      isOperating &&
      secondOperand == ""
    ) {
      secondOperand += operand;
      updateDisplay(firstOperand, operator, secondOperand);
      return;
    } else if (operand == "-" && firstOperand == "") {
      firstOperand += operand;
      updateDisplay(firstOperand, operator, secondOperand);
      return;
    } else if (firstOperand !== "" && secondOperand !== "") {
      firstOperand = +firstOperand;
      secondOperand = +secondOperand;

      let result = operate(firstOperand, secondOperand, operator);
      const truncResult = Math.trunc(result);
      if (result == undefined) {
        return;
      }

      if (result !== truncResult) {
        result = Number(result.toFixed(6));
      }

      previousResult = result;
      firstOperand = String(result);
      secondOperand = "";
      updateOperator(operand);
      updateDisplay(firstOperand, operator, secondOperand, result);
      return;
    } else {
      updateOperator(operand);
      isOperator = true;
    }
  }

  if (operand == "=" && firstOperand !== "" && secondOperand !== "") {
    firstOperand = +firstOperand;
    secondOperand = +secondOperand;
    let result = operate(firstOperand, secondOperand, operator);
    const truncResult = Math.trunc(result);
    if (result == undefined) {
      return;
    }

    if (result !== truncResult) {
      result = Number(result.toFixed(6));
    }

    updateDisplay(firstOperand, operator, secondOperand, result);
    clearCalculator();
    return;
  }

  if (operand == "Clear") {
    clearCalculator();
    updateDisplay(firstOperand, operator, secondOperand);
    return;
  }

  updateOperands(operand, isOperator, isFunctionKey);
  updateDisplay(firstOperand, operator, secondOperand);

  console.log(
    `firstOp: ${firstOperand} Op: ${operator} secondOp: ${secondOperand}`,
  );
});
