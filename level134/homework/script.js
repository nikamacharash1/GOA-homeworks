function plus(a, b) {
    return a + b;
  }
  
  function minus(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return 'Cannot divide by zero!';
    }
    return a / b;
  }
  
  const form = document.getElementById('calculator-form');
  const resultDiv = document.getElementById('result');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
  
    let result;
  
    if (operation === '+') {
      result = plus(num1, num2);
    } else if (operation === '-') {
      result = minus(num1, num2);
    } else if (operation === '*') {
      result = multiply(num1, num2);
    } else if (operation === '/') {
      result = divide(num1, num2);
    } else {
      result = 'Invalid operation';
    }
  
    resultDiv.textContent = `Result: ${result}`;
  });
  