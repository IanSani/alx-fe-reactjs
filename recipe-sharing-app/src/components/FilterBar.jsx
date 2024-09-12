import  { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const FilterBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const [timeFilter, setTimeFilter] = useState('');
  
  const handleTimeFilterChange = (e) => {
    setTimeFilter(e.target.value);
    setSearchTerm(e.target.value); // Optionally filter by time
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by time (in minutes)"
        value={timeFilter}
        onChange={handleTimeFilterChange}
      />
      {/* Add other filter options here */}
    </div>
  );
};

export default FilterBar;
