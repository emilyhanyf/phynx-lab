import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import './SearchForm.css';

interface SearchFormProps {
  handleSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="질문을 입력하세요."
          className="search-input"
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default SearchForm;
