import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  // State for form fields
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // Added state for location
  const [minRepos, setMinRepos] = useState(''); // Added state for minimum repositories
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(username, location, minRepos); // Pass location and minRepos to fetchUserData
      if (userData.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setUser(userData[0]); // Display the first matching user
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="input-field"
        />
        <button type="submit" className="btn-primary">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="user-info mt-4">
          <img src={user.avatar_url} alt={user.name} className="rounded-full w-24 h-24 mx-auto" />
          <h1 className="text-xl text-center mt-2">{user.name}</h1>
          <p className="text-center">Username: {user.login}</p>
          <p className="text-center">
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
