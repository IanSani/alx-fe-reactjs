import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details based on ID
    const foundRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 mb-4">
          {/* Replace with actual ingredients if available */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
          {/* You can parse and display ingredients from recipe data */}
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
        <p>{recipe.summary}</p> {/* Use actual instructions if available */}
      </div>
    </div>
  );
};

export default RecipeDetail;
