import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

type SearchFormProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  placeholder?: string;
  buttonLabel?: string;
};

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange, onSearch, placeholder, buttonLabel = '検索' }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSearch();
      }}
      style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
    >
      <Input value={value} onChange={onChange} placeholder={placeholder} />
      <Button type="submit">{buttonLabel}</Button>
    </form>
  );
};

export default SearchForm; 