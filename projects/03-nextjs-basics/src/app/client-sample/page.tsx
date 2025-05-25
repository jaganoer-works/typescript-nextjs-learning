'use client';

import { useEffect, useState } from 'react';

export default function ClientSample() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      <h2>クライアントコンポーネント</h2>
      <p>メッセージ: {message}</p>
    </div>
  );
}
