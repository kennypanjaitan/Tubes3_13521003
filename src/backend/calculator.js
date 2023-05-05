function parseExpression(expr) {
    const outputQueue = [];
    const operatorStack = [];
  
    for (let i = 0; i < expr.length; i++) {
      let char = expr[i];
  
      if (/\s/.test(char)) {
        continue;
      }
  
      if (/\d/.test(char)) {
        let numStr = char;
        while (i + 1 < expr.length && /\d/.test(expr[i + 1])) {
          numStr += expr[++i];
        }
        outputQueue.push(parseFloat(numStr));
      }
  
      else if (/[\+\-\*\/]/.test(char)) {
        let precedence = getPrecedence(char);
  
        while (operatorStack.length > 0 && precedence <= getPrecedence(operatorStack[operatorStack.length - 1])) {
          outputQueue.push(operatorStack.pop());
        }
  
        operatorStack.push(char);
      }
  
      else if (char === '(') {
        operatorStack.push(char);
      }
  
      else if (char === ')') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          outputQueue.push(operatorStack.pop());
        }
  
        if (operatorStack.length === 0 || operatorStack[operatorStack.length - 1] !== '(') {
          throw new Error('Tanda kurung tidak cocok');
        }
  
        operatorStack.pop();
      }
  
      else {
        throw new Error(`Karakter tidak valid: ${char}`);
      }
    }
  
    while (operatorStack.length > 0) {
      let operator = operatorStack.pop();
  
      if (!/[\+\-\*\/]/.test(operator)) {
        throw new Error(`Operator tidak valid: ${operator}`);
      }
  
      outputQueue.push(operator);
    }
  
    let stack = [];
    for (let i = 0; i < outputQueue.length; i++) {
      let item = outputQueue[i];
  
      if (typeof item === 'number') {
        stack.push(item);
      } else if (/[\+\-\*\/]/.test(item)) {
        let b = stack.pop();
        let a = stack.pop();
  
        if (item === '/' && b === 0) {
          throw new Error('Pembagian dengan 0');
        }
  
        let result = evaluateExpression(a, b, item);
        stack.push(result);
      }
    }
  
    if (stack.length !== 1) {
      throw new Error('Tidak bisa dihitung');
    }
  
    return stack.pop();
}
  
function getPrecedence(operator) {
    switch (operator) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      default:
        return 0;
    }
}
  
function evaluateExpression(a, b, operator) {
    switch (operator) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
    }
}

function main(){
    const inputExpr = '4 *';

    try 
    {
      const result = parseExpression(inputExpr);
      console.log(`${inputExpr} = ${result}`);
    } 
    catch (error) 
    {
      console.error(`Error: ${error.message}`);
    }
}

// main();
export default parseExpression;