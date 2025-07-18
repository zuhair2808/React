import { useState } from 'react';
import './App.css';

function App() {
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);
    const [result, setResult] = useState(0);
    function multiply() {
      const a = parseInt(operand1);
      const b = parseInt(operand2);
      setResult (a * b)
    }
  return (
   <div className="container">
    <input className="input-field" type="number" placeholder="Enter first operand" value={operand1} onChange={(e) => setOperand1(e.target.value)}/>
    <input className="input-field" type="number" placeholder="Enter second operand" value={operand2} onChange={(e) => setOperand2(e.target.value)}/>
   <button onClick={multiply}>multiply</button>
   {result !== null&&
   <div className="result"> Result: {result}</div>}
</div>
  );
}

export default App;
