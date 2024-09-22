// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/users';

export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Re-throwing the error for handling in component
  }
};