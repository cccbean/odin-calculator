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

function operate(a, operator, b) {
  a = Number(a);
  b = Number(b);
  
  if (operator === "+") {
    return add(a, b);
  }
  else if (operator === "-") {
    return subtract(a, b);
  }
  else if (operator === "*") {
    return multiply(a, b);
  }
  else if (operator === "/") {
    return divide(a, b);
  }
}

function logInput(text) {
  const textBox = document.querySelector(".text");
  let textBoxArr = textBox.textContent.split(" ");
  if (text.match(/[0-9]/)) {
    textBox.textContent += text;
  }
  else if (text.match(/[.]/)) {
    if (textBoxArr[textBoxArr.length - 1].includes(".")) {
      // do nothing
    }
    else {
      textBox.textContent += text;
    }
  }
  else {
    textBox.textContent += ` ${text} `;
  }
}

function makeButtons() {
  const buttons = document.querySelectorAll("button:not(#equals, #clear, #delete, #negative)");
  buttons.forEach((button => {
    button.addEventListener("click", (e) => logInput(e.target.textContent))
  }));

  const equalButton = document.querySelector("#equals");
  equalButton.addEventListener("click", (e) => calculate(e.target.textContent));

  const clearButton = document.querySelector("#clear");
  clearButton.addEventListener("click", clear);

  const delButton = document.querySelector("#delete");
  delButton.addEventListener("click", del)

  const negButton = document.querySelector("#negative");
  negButton.addEventListener("click", addNegative);
}

function clear() {
  const textBox = document.querySelector(".text");
  textBox.textContent = "";
}

function del() {
  const textBox = document.querySelector(".text");
  let textBoxArr = textBox.textContent.split(" ");
  textBoxArr.pop();
  textBox.textContent = textBoxArr.join(" ");
  
}

function addNegative() {
  const textBox = document.querySelector(".text");
  let textBoxArr = textBox.textContent.split(" ");
  let lastNumber = textBoxArr[textBoxArr.length - 1];
  if (lastNumber.match(/[0-9]/)) {
    textBoxArr[textBoxArr.length - 1] = Number(lastNumber) * -1;
    textBox.textContent = textBoxArr.join(" ");
  }
}

function calculate() {
  const textBox = document.querySelector(".text");
  let textArr = textBox.textContent.split(" ");
  console.log(textArr);

  while (textArr.length > 3) {
    
  }

  textBox.textContent = operate(textArr[0], textArr[1], textArr[2]);
  
}



makeButtons();