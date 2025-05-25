import React, { useState, useMemo } from 'react';

const MemoSample: React.FC = () => {
  const [count, setCount] = useState(0);

  // useMemoの型推論（明示したい場合は<型>を指定）
  const double = useMemo<number>(() => count * 2, [count]);

  return (
    <div>
      <p>カウント: {count}</p>
      <p>2倍: {double}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
    </div>
  );
};

export default MemoSample; 