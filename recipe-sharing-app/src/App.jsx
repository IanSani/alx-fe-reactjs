
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoriteList';  
import RecommendationsList from './components/RecommendationsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar'; // Import SearchBar
import FilterBar from './components/FilterBar'; // Import FilterBar

import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails if needed
import EditRecipeForm from './components/EditRecipeForm';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {/* Add SearchBar and FilterBar  here */}
                <SearchBar />
                <FilterBar />
                <RecipeList />
                <EditRecipeForm />
                <AddRecipeForm  />
                <FavoritesList />
                <RecommendationsList />
              </>
            } 
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
