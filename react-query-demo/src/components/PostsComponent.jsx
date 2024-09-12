
import { useQuery } from 'react-query';

// Function to fetch posts from the JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Using useQuery to fetch posts with additional options
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery('posts', fetchPosts, {
    staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Cached data will remain for 10 minutes
    refetchOnWindowFocus: true, // Refetch data when the window is focused
    keepPreviousData: true, // Keep previous data while new data is being fetched
  });

  // Handle loading state
  if (isLoading) return <div>Loading...</div>;

  // Handle error state
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;