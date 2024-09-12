// FilterBar.js
import { useRecipeStore } from './recipeStore';

const FilterBar = () => {
  const setIngredientFilter = useRecipeStore(state => state.setIngredientFilter);
  const setCookingTimeFilter = useRecipeStore(state => state.setCookingTimeFilter);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by ingredient"
        onChange={(e) => setIngredientFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max cooking time (minutes)"
        onChange={(e) => setCookingTimeFilter(e.target.value ? parseInt(e.target.value) : null)}
      />
    </div>
  );
};

export default FilterBar;