import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';  
import RecommendationsList from './components/RecommendationsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar'; // Import SearchBar
import FilterBar from './components/FilterBar'; // Import FilterBar
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails
import EditRecipeForm from './components/EditRecipeForm';
import { useState } from 'react';

function App() {
  const [isEditing, setIsEditing] = useState(false); // State to manage editing mode

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <SearchBar />
              <FilterBar />
              {isEditing ? (
                <EditRecipeForm onClose={() => setIsEditing(false)} />
              ) : (
                <>
                  <RecipeList onEdit={() => setIsEditing(true)} />
                  <AddRecipeForm />
                  <FavoritesList />
                  <RecommendationsList />
                </>
              )}
            </>
          } 
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;