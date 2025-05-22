'use client';

import { useState } from 'react';

export default function ClientSample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>クライアントコンポーネント</h2>
      <p>カウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
} 