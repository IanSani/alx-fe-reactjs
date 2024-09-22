import  { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search GitHub username..."
          className="border p-2 rounded-md"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md ml-2">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="user-info mt-4">
          <img src={user.avatar_url} alt={user.name} className="rounded-full w-24 h-24 mx-auto" />
          <h1 className="text-xl text-center mt-2">{user.name}</h1>
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
