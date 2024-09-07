import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { useRecipeStore } from './recipeStore';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar'; // Import SearchBar
import FilterBar from './components/FilterBar'; // Import FilterBar
import Home from './components/Home'; // Import Home if needed
import RecipeDetails from './components/RecipeDetails'; // Import RecipeDetails if needed

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {/* Add SearchBar and FilterBar components here */}
                <SearchBar />
                <FilterBar />
                <RecipeList />
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
