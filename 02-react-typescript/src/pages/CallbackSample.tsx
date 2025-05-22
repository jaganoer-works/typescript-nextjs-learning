import React, { useState, useCallback } from 'react';

const CallbackSample: React.FC = () => {
  const [count, setCount] = useState(0);

  // useCallbackの型推論（引数・戻り値の型も自動で推論される）
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={increment}>カウントアップ</button>
    </div>
  );
};

export default CallbackSample; 