'use client';
import React, { useState } from 'react';
import SearchForm from '../molecules/SearchForm';

// ダミーデータ
const items = [
  'りんご',
  'バナナ',
  'オレンジ',
  'ぶどう',
  'メロン',
  'スイカ',
];

const SearchSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>(items);

  const handleSearch = () => {
    if (!query) {
      setResults(items);
    } else {
      setResults(items.filter(item => item.includes(query)));
    }
  };

  return (
    <section>
      <h2>果物検索</h2>
      <SearchForm
        value={query}
        onChange={e => setQuery(e.target.value)}
        onSearch={handleSearch}
        placeholder="果物名で検索"
      />
      <ul>
        {results.length === 0 ? (
          <li>該当なし</li>
        ) : (
          results.map(item => <li key={item}>{item}</li>)
        )}
      </ul>
    </section>
  );
};

export default SearchSection; 