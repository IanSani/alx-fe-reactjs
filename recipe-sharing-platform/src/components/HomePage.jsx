import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import data from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the mock data (or API if available)
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-md">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
