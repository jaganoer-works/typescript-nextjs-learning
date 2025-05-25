import React from 'react';

// MyButtonコンポーネントのProps型定義
// label: ボタンに表示するテキスト
// その他のbutton要素の標準属性も受け取れる
type MyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

const MyButton: React.FC<MyButtonProps> = ({ label, ...props }) => (
  <button {...props}>{label}</button>
);

export default MyButton; 