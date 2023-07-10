import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:8000/api/v1/helperProfilesStats/profileStat?jobSector=${searchQuery}`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div>
        {searchResults.map(result => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;