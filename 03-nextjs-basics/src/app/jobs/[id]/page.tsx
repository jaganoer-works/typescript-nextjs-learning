type Props = {
  params: { id: string };
};

export default function JobDetailPage({ params }: Props) {
  return (
    <div>
      <h1>ジョブ詳細ページ</h1>
      <p>ジョブID: {params.id}</p>
      <p>
        <a href={`/jobs/${params.id}/edit`}>編集する</a>
      </p>
    </div>
  );
}
