// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = ({ setUserData, setLoading, setError }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before fetching

    try {
      const userData = await fetchUserData(username);
      setUserData(userData);
    } catch (error) {
      // Set the error message if the user is not found
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {/* Display error message if there's an error */}
      {setError && <p>{setError}</p>}
    </div>
  );
};

export default Search;