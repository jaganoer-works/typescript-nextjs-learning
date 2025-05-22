import React from 'react';

// CardコンポーネントのProps型定義
// title: カードのタイトル
// children: カード内に表示する要素
type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);

export default Card; 