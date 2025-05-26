import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const summary = {
  engineers: 2,
  projects: 2,
  skills: 5
};
const recentUpdates = [
  "田中 太郎（エンジニア追加）",
  "Web開発プロジェクト（案件更新）"
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold mb-4">ダッシュボード</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>エンジニア数</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{summary.engineers}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>案件数</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{summary.projects}</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>スキル数</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-3xl font-bold">{summary.skills}</span>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">最近の更新</h2>
        <ul className="list-disc pl-6">
          {recentUpdates.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 