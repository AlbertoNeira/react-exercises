import React, {useState, useEffect } from "react";


const ClickCounter = ({ onCounterChange } ) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        onCounterChange(count);
      }, [count, onCounterChange]);
      
    const incrementCounter = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCounter}>Increment</button>
      </div>
    );
  };

export default ClickCounter;