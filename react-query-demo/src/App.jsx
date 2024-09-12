
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent.jsx'; // Import your PostsComponent

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;