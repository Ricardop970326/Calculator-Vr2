import React, { useState } from 'react';
import '../css/caculator.css'; // Import CSS file for styling

const Calculator = () => {
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [operation, setOperation] = useState('');
  const [memory, setMemory] = useState(0); // Initialize memory state
  const [previousResult, setPreviousResult] = useState(null); // Store the result of the previous operation

  const clear = () => {
      setCurrentOperand('');
      setPreviousOperand('');
      setOperation('');
      setPreviousResult(null); // Clear the previous result
  };

  const deleteLast = () => {
      setCurrentOperand(currentOperand.slice(0, -1));
  };

  const appendNumber = (number) => {
      setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (op) => {
      if (currentOperand === '' && previousOperand !== '') {
          setOperation(op);
          return;
      }
      if (previousOperand !== '' && operation !== '') {
          compute(); // Perform previous operation
      }
      setOperation(op); // Set new operation
      setPreviousOperand(currentOperand); // Set previous operand as the result
      setCurrentOperand('');
  };

  const compute = () => {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Can't divide by zero!");
                return;
            }
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        case 'EXP':
            result = prev ** current;
            break;
        default:
            return;
    }

    setCurrentOperand(result.toString());
    setOperation(undefined);
    setPreviousOperand('');
    setPreviousResult(result); // Store the result of the current operation
};

  const updateDisplay = () => {
      const prevDisplay = document.querySelector('[data-previous-operand]');
      const currentDisplay = document.querySelector('[data-current-operand]');

      if (previousResult !== null && operation) {
          prevDisplay.innerText = `${previousResult} ${operation}`;
      } else {
          prevDisplay.innerText = previousOperand;
      }
      currentDisplay.innerText = currentOperand;
  };

    const addToMemory = () => {
        setMemory(memory + parseFloat(currentOperand));
    };

    const subtractFromMemory = () => {
        setMemory(memory - parseFloat(currentOperand));
    };

    const recallMemory = () => {
        setCurrentOperand(memory.toString());
    };

    const clearMemory = () => {
        setMemory(0);
    };

    const handleNumberClick = (number) => {
        appendNumber(number);
        updateDisplay();
    };

    const handleOperationClick = (op) => {
        chooseOperation(op);
        updateDisplay();
    };

    const handleEqualsClick = () => {
        compute();
        updateDisplay();
    };

    const handleAllClearClick = () => {
        clear();
        updateDisplay();
    };

    const handleDeleteClick = () => {
        deleteLast();
        updateDisplay();
    };

    return (
      <>
       <header>
            <h1 id="title">Calculator.</h1>
        </header>
        <div className="gridwrapper">
            <div data-display="" className="numbtn displayscreen">
                <div data-previous-operand="" className="prev-display">{previousOperand}</div>
                <div data-current-operand="" className="current-display">{currentOperand}</div>
                <div />
            </div>

            <button data-operation="" className="numbtn memory" onClick={addToMemory}>M+</button>
            <button data-operation="" className="numbtn memory" onClick={subtractFromMemory}>M-</button>
            <button data-operation="" className="numbtn memory" onClick={recallMemory}>MR</button>
            <button data-operation="" className="numbtn memory" onClick={clearMemory}>MC</button>

            <button data-operation="" className="numbtn percent esp" onClick={() => handleOperationClick('%')}>%</button>
            <button data-operation="" className="numbtn exp esp" onClick={() => handleOperationClick('EXP')}>EXP</button>
            <button data-number="" className="numbtn caling esp" onClick={() => handleNumberClick(',')}>,</button>
            <button data-operation="" className="numbtn arrowup" onClick={() => handleOperationClick('^')}>^</button>
            <button data-operation="" className="numbtn slash" onClick={() => handleOperationClick('/')}>/</button>
            <button data-number="" className="numbtn dot" onClick={() => handleNumberClick('.')}>.</button>
            <button data-deleted="" className="numbtn del" onClick={handleDeleteClick}>C</button>
            <button data-all-clear="" className="numbtn acall" onClick={handleAllClearClick}>AC</button>
            <button data-operation="" className="numbtn multiply" onClick={() => handleOperationClick('*')}>*</button>
            <button data-number="" className="numbtn seven" onClick={() => handleNumberClick('7')}>7</button>
            <button data-number="" className="numbtn eight" onClick={() => handleNumberClick('8')}>8</button>
            <button data-number="" className="numbtn nine" onClick={() => handleNumberClick('9')}>9</button>
            <button data-operation="" className="numbtn minus" onClick={() => handleOperationClick('-')}>-</button>
            <button data-number="" className="numbtn four" onClick={() => handleNumberClick('4')}>4</button>
            <button data-number="" className="numbtn five" onClick={() => handleNumberClick('5')}>5</button>
            <button data-number="" className="numbtn six" onClick={() => handleNumberClick('6')}>6</button>
            <button data-operation="" className="numbtn plus" onClick={() => handleOperationClick('+')}>+</button>
            <button data-number="" className="numbtn three" onClick={() => handleNumberClick('3')}>3</button>
            <button data-number="" className="numbtn two" onClick={() => handleNumberClick('2')}>2</button>
            <button data-number="" className="numbtn one" onClick={() => handleNumberClick('1')}>1</button>
            <button data-number="" className="numbtn twozero" onClick={() => handleNumberClick('00')}>00</button>
            <button data-number="" className="numbtn zero" onClick={() => handleNumberClick('0')}>0</button>
            <button data-equals="" className="numbtn equal" onClick={handleEqualsClick}>=</button>
        </div>
    </>
);
    }
export default Calculator;