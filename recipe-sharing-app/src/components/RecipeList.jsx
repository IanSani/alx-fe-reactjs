
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients.join(', ')}</p>
            <p>Preparation Time: {recipe.preparationTime} minutes</p>
          </div>
        ))
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
