import React from 'react';

// ButtonコンポーネントのProps型定義
// label: ボタンに表示するテキスト
// onClick: クリック時のイベントハンドラ
// disabled: 無効化フラグ（オプショナル）
type ButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button; 