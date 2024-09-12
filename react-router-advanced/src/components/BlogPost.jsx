import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post data based on the id parameter
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/api/blog-posts/${id}`);
        const data = await response.json();
        setBlogPost(data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
      {/* Add more blog post details as needed */}
    </div>
  );
};

export default BlogPost;