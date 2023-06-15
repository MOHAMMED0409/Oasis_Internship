function appendValue(value) {
    document.getElementById('result').value += value;
  }
  
  function appendSqrt() {
    document.getElementById('result').value += 'Math.sqrt(';
  }
  
  function calculate() {
    let result = document.getElementById('result').value;
  
    if (result.includes('%')) {
      result = handlePercentage(result);
    }
  
    const answer = eval(result);
    document.getElementById('result').value = answer;
  }
  
  function clearResult() {
    document.getElementById('result').value = '';
  }
  
  function handlePercentage(expression) {
    const lastOperatorIndex = expression.search(/[\+\-\*\/]/g);
    const numberStr = expression.substring(lastOperatorIndex + 1);
    const number = parseFloat(numberStr.replace('%', '')) / 100;
    const result = expression.substring(0, lastOperatorIndex + 1) + number;
  
    return result;
  }
  