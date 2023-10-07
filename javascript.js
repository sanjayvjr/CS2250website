
  const clear = () => {
    document.getElementById('result').value = '';
  };

  const calculate = () => {
    const expression = document.getElementById('result').value;
    const result = eval(expression);
    document.getElementById('result').value = result;
  };
  

  const display = (value) => {
    document.getElementById('result').value += value;
  };
  

  const calculateExpression = (expression) => {
    const tokens = expression.split(/([\+\-\*\/])+/);
  
    const stack = [];
  
    for (const token of tokens) {
      if (isNaN(token)) {
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const result = eval(`${operand1} ${token} ${operand2}`);

        stack.push(result);
      } else {
        stack.push(Number(token));
      }
    }
    return stack.pop();
  };
  
  calculate = () => {
    const expression = document.getElementById('result').value;
    const result = calculateExpression(expression);
    document.getElementById('result').value = result;
  };
