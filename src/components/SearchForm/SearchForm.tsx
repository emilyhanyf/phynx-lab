import React, { useState } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton'; 
import './SearchForm.css';

interface SearchFormProps {
  handleSearch: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ handleSearch }) => {
  const [query, setQuery] = useState<string>('');

  return (
    <form onSubmit={handleSearch} className="search-form">
      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="질문을 입력하세요."
          className="search-input"
        />
        {/* The SubmitButton does not need an onClick here */}
        <SubmitButton />
      </div>
    </form>
  );
};

export default SearchForm;