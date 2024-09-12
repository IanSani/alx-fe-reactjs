import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost'; 

import './App.css'

const queryClient = new QueryClient();

function App() {
    return (
      <Router>
      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App
