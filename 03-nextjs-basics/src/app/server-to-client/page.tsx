import ClientUserList from '@/app/user-list-client';

// サーバー側でユーザー一覧を取得
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  return res.json() as Promise<{ id: number; name: string }[]>;
}

export default async function ServerToClientPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h2>サーバー→クライアント連携サンプル</h2>
      <ClientUserList users={users} />
    </div>
  );
} 