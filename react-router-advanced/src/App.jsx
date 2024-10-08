import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost'; 
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { AuthProvider } from './components/AuthContext'; // Import AuthProvider

import './App.css'

const queryClient = new QueryClient();

function App() {
    return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add the BlogPost route */}
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App
