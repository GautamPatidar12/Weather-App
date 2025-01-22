import React, { useState } from 'react';
import './style.css';

function WeatherSearch({ setLocation }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setLocation(search);
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
}

export default WeatherSearch;