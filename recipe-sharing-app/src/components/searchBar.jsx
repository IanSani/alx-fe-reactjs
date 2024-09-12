
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const setSearchPreparationTime = useRecipeStore(state => state.setSearchPreparationTime);

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max preparation time (minutes)"
        onChange={(e) => setSearchPreparationTime(e.target.value ? parseInt(e.target.value) : null)}
      />
    </div>
  );
};

export default SearchBar;