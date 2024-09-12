import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  searchPreparationTime: null, // New state for searching by preparation time
  filteredRecipes: [],
  favorites: [],
  
  // Actions for favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  recommendations: [],
  
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

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
  setRecipes: (recipes) => set({ recipes }),

  // Set search term for title and ingredients
  setSearchTerm: (term) => set(state => {
    state.searchTerm = term;
    state.filterRecipes();
  }),

  // Set search term for preparation time
  setSearchPreparationTime: (time) => set(state => {
    state.searchPreparationTime = time;
    state.filterRecipes();
  }),

  // Filter recipes based on search terms
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe => {
      const searchTitle = recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase());
      const searchIngredients = recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      const searchTime = state.searchPreparationTime === null || 
        (recipe.preparationTime && recipe.preparationTime <= state.searchPreparationTime);
      return (searchTitle || searchIngredients) && searchTime;
    })
  })),
}));

export { useRecipeStore };