import Link from 'next/link';

export default function JobsPage() {
  // 仮のデータ
  const jobs = [
    { id: '1', name: 'エンジニア' },
    { id: '2', name: 'デザイナー' },
  ];

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
