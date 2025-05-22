import React, { useState } from 'react';
import Card from './components/Card';
import List from './components/List';
import Alert from './components/Alert';
import DeleteButton from './components/DeleteButton';
import MyButton from './components/MyButton';
import Button from './components/Button';
import './App.css';

const users = [
  { id: 1, name: 'Taro' },
  { id: 2, name: 'Jiro' },
  { id: 3, name: 'Hanako' },
];

const App: React.FC = () => {
  const [alert, setAlert] = useState<string | null>(null);
  const [userList, setUserList] = useState(users);
  const [count, setCount] = useState(0);

  // ユーザー削除ハンドラ
  const handleDelete = (id: number) => {
    setUserList(prev => prev.filter(u => u.id !== id));
    setAlert(`ユーザーID:${id} を削除しました`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ maxWidth: 600, width: '100%' }}>
        <h1>型付きコンポーネント サンプルページ</h1>

        {/* Alertコンポーネントの例 */}
        {alert && <Alert message={alert} type="success" />}

        {/* Card + List + DeleteButton の例 */}
        <Card title="ユーザー一覧">
          <List
            items={userList}
            renderItem={(user) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>{user.name}</span>
                <DeleteButton id={user.id} onDelete={handleDelete} />
              </div>
            )}
          />
        </Card>

        {/* MyButton（スプレッド属性）とButton（基本） */}
        <div style={{ marginTop: 32 }}>
          <MyButton label="通常ボタン" onClick={() => setAlert('MyButtonがクリックされました')} />
          <MyButton label="無効ボタン" disabled style={{ marginLeft: 8 }} />
        </div>
        <div style={{ marginTop: 16 }}>
          <Button label="カウントアップ" onClick={() => setCount(count + 1)} />
          <span style={{ marginLeft: 12 }}>カウント: {count}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
