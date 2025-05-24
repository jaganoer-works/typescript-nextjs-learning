import Link from 'next/link';

type Job = {
  id: number;
  name: string;
};

export default async function JobsPage() {
  // 外部APIからデータ取得
  const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
  const jobs: Job[] = await res.json();

  return (
    <div>
      <h1>ジョブ一覧</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/jobs/${job.id}`}>{job.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
