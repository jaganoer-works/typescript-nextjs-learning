import React, { useState, useEffect } from 'react';

const StateEffectSample: React.FC = () => {
  // useStateの型付け
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  // useEffectの型付け（型推論でOK）
  useEffect(() => {
    setMessage(`カウントは${count}です`);
  }, [count]);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
};

export default StateEffectSample; 