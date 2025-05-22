export type User = {
  id: number;
  name: string;
};

// ユーザー一覧を取得
export async function fetchUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  // 必要に応じて型変換
  return data.map((u: any) => ({ id: u.id, name: u.name }));
}

// ユーザーを追加（ダミーAPIなのでidはランダム）
export async function addUser(user: { name: string }): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  // JSONPlaceholderはidを返すが、実際はダミー
  return { id: data.id ?? Math.floor(Math.random() * 10000), name: data.name };
} 