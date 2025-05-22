import React from 'react';

// DeleteButtonコンポーネントのProps型定義
// id: 削除対象のID
// onDelete: 削除時に呼ばれるコールバック関数（idを引数に受け取る）
type DeleteButtonProps = {
  id: number;
  onDelete: (id: number) => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onDelete }) => (
  <button onClick={() => onDelete(id)} style={{ color: 'white', background: 'red', border: 'none', borderRadius: '4px', padding: '6px 12px' }}>
    削除
  </button>
);

export default DeleteButton; 