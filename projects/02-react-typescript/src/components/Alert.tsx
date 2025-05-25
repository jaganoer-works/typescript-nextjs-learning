import React from 'react';

// AlertコンポーネントのProps型定義
// message: 表示するメッセージ
// type: アラートの種類（省略可能、デフォルトは'success'）
type AlertProps = {
  message: string;
  type?: 'success' | 'error';
};

const Alert: React.FC<AlertProps> = ({ message, type = 'success' }) => (
  <div style={{ color: type === 'error' ? 'red' : 'green', border: '1px solid', padding: '8px', borderRadius: '4px' }}>
    {message}
  </div>
);

export default Alert; 