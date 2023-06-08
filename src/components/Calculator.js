import React, { useState } from 'react';
import '../styles/Calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('0');

  const btnClick = (e) => {
    const value = e.target.value;
    setResult(result === '0' ? value : result + value);
  };

  const calculate = () => {
    setResult('');
  };

  const clear = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="Input">
        <input className="enter" type="text" value={result} readOnly />
      </div>
      <div className="grid-container">
        <button className="grid-item item1" onClick={clear} value="AC" type="button">AC</button>
        <button className="grid-item item2" onClick={btnClick} value="+/-" type="button">+/-</button>
        <button className="grid-item item3" onClick={btnClick} value="%" type="button">%</button>
        <button className="grid-item item4" onClick={btnClick} value="÷" type="button">÷</button>

        <button className="grid-item item5" onClick={btnClick} value="7" type="button">7</button>
        <button className="grid-item item6" onClick={btnClick} value="8" type="button">8</button>
        <button className="grid-item item7" onClick={btnClick} value="9" type="button">9</button>
        <button className="grid-item item8" onClick={btnClick} value="x" type="button">x</button>

        <button className="grid-item item9" onClick={btnClick} value="4" type="button">4</button>
        <button className="grid-item item10" onClick={btnClick} value="5" type="button">5</button>
        <button className="grid-item item11" onClick={btnClick} value="6" type="button">6</button>
        <button className="grid-item item12" onClick={btnClick} value="-" type="button">-</button>

        <button className="grid-item item13" onClick={btnClick} value="1" type="button">1</button>
        <button className="grid-item item14" onClick={btnClick} value="2" type="button">2</button>
        <button className="grid-item item15" onClick={btnClick} value="3" type="button">3</button>
        <button className="grid-item item16" onClick={btnClick} value="+" type="button">+</button>

        <button className="grid-item item17" onClick={btnClick} value="0" type="button">0</button>
        <button className="grid-item item18" onClick={btnClick} value="." type="button">.</button>
        <button className="grid-item item19" onClick={calculate} value="=" type="button">=</button>
      </div>
    </div>
  );
};

export default Calculator;
