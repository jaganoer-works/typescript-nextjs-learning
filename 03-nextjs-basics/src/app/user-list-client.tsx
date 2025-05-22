'use client';

import { useState } from 'react';

type User = { id: number; name: string };

type Props = { users: User[] };

export default function ClientUserList({ users }: Props) {
  const [filter, setFilter] = useState('');
  const filtered = users.filter(u => u.name.includes(filter));

  return (
    <div>
      <input
        type="text"
        placeholder="名前でフィルタ"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        style={{ marginBottom: 8 }}
      />
      <ul>
        {filtered.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <p>表示件数: {filtered.length}</p>
    </div>
  );
} 