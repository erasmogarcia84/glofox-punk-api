import React, { useState } from 'react';
import filters from './constants';

const SearchBox = () => {
  const [searchFilter, setSearchFilter] = useState(filters.ByName);
  const handleFilter = (filter) => {
    setSearchFilter(filter);
  };
  return (
    <section id="searchBeer">
      <h2>Search</h2>
      <div className="searchBeer__bar">
        {searchFilter === filters.ByName ? (
          <input type="text" placeholder="write something..." />
        ) : (
          <input type="date" />
        )}
        <button type="button">Search</button>
      </div>
      <div className="searchBeer__options">
        <div>
          <label htmlFor="searchFilter">
            <input
              type="radio"
              name="searchForm"
              id="searchFilter"
              value={filters.ByName}
              onChange={(event) => handleFilter(event.target.value)}
            />
            By Name
          </label>
        </div>
        <div>
          <label htmlFor="searchValue">
            <input
              type="radio"
              name="searchForm"
              id="searchValue"
              value={filters.ByBrewedBefore}
              onChange={(event) => handleFilter(event.target.value)}
            />
            By Brewed Before
          </label>
        </div>
      </div>
    </section>
  );
};
export default SearchBox;
