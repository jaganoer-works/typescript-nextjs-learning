import React from 'react';
import { useCounter } from '../hooks/useCounter';

const CustomHookSample: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
};

export default CustomHookSample; 