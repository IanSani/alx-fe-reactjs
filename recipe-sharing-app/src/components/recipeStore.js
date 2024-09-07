import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  

  // Add a new recipe
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe],
  })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Delete a recipe
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
  })),

  // Set the entire recipes array
  setRecipes: (recipes) => set({ recipes }), // Add this method
  setSearchTerm: (term) => set(state => {
    // Set search term and trigger recipe filtering
    state.searchTerm = term;
    state.filterRecipes();
  }),
  
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe => {
      const searchTitle = recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase());
      const searchIngredients = recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      const searchTime = recipe.preparationTime && recipe.preparationTime <= state.searchTerm;
      return searchTitle || searchIngredients || searchTime;
    })
  })),
}));

export { useRecipeStore };
