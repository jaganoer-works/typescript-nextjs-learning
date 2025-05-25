'use client';
import React, { useState } from 'react';
import SearchForm from '../molecules/SearchForm';

// ダミーデータ
const items = ['りんご', 'バナナ', 'オレンジ', 'ぶどう', 'メロン', 'スイカ'];

const SearchSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>(items);

  const handleSearch = () => {
    if (!query) {
      setResults(items);
    } else {
      setResults(items.filter((item) => item.includes(query)));
    }
  };

  return (
    <section className="max-w-md mx-auto bg-white p-4 rounded shadow">
  <h2 className="text-xl font-bold mb-4 text-gray-800">果物検索</h2>
  <SearchForm
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
        placeholder="果物名で検索"
      />
      <ul className="mt-4 text-gray-800">
        {results.length === 0 ? (
          <li className="text-gray-800">該当なし</li>
        ) : (
          results.map((item) => (
            <li key={item} className="py-1">
              {item}
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default SearchSection;
