import React, { useState } from 'react';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const apiUrl = 'http://localhost:8000/api/v1/helperProfilesStats/profileStat';
    const searchUrl = new URL(apiUrl);
    searchUrl.searchParams.append('jobSector', searchQuery);
  
    fetch(searchUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
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