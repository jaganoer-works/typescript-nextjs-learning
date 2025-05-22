import React, { useState } from 'react';

type NewUser = { name: string };

type AddUserFormProps = {
  onAdd: (user: NewUser) => void;
};

const AddUserForm: React.FC<AddUserFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('名前は必須です');
      return;
    }
    onAdd({ name });
    setName('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="名前を入力"
      />
      <button type="submit">追加</button>
      {error && <span style={{ color: 'red', marginLeft: 8 }}>{error}</span>}
    </form>
  );
};

export default AddUserForm; 