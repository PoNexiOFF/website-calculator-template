let result = '';

function appendValue(value) {
  result += value;
  updateDisplay();
}

function appendOperator(operator) {
  result += operator;
  updateDisplay();
}

function calculate() {
  try {
    const calculatedResult = eval(result);
    result = calculatedResult.toString();
    updateDisplay();
  } catch (error) {
    result = 'Error';
    updateDisplay();
  }
}

function clearResult() {
  result = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = result;
}
