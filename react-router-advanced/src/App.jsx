import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

const queryClient = new QueryClient();

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<PostsComponent />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </Router>
  );
}

export default App
