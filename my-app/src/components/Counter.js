import React, { useState, useEffect } from 'react';

import CounterDisplay from './CounterDisplay';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
    return (
      <div>
         <CounterDisplay count= {count} />
      </div>
    );
  }



  
export default Counter;