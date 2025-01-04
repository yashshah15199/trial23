import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Counter() {
  const initailValue = 0;
  const [count, setCount] = useState(initailValue);
  const navigate = useNavigate()

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }
  };

  const handleClick =()=>{
    navigate('/bcd')
  }

  return (
    <div>
      <p>Count {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount(initailValue)}>Reset</button>
      <button onClick={incrementFive}>Increment Five</button>
      <button onClick={handleClick}>Go to BCG</button>
    </div>
  );
}

export default Counter;
