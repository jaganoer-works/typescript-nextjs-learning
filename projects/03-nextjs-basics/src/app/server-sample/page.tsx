export default async function ServerSample() {
  // サーバー側で現在時刻を取得
  const now = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  return (
    <div>
      <h2>サーバーコンポーネント</h2>
      <p>現在時刻（サーバー取得）: {now}</p>
    </div>
  );
} 