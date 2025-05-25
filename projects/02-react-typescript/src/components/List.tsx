import React from 'react';

// ListコンポーネントのProps型定義（ジェネリクス）
// items: 表示するデータ配列
// renderItem: 各要素の表示方法を返す関数
type ListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <ul>{items.map((item, i) => <li key={i}>{renderItem(item, i)}</li>)}</ul>;
}

export default List; 