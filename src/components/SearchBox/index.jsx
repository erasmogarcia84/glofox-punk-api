import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBeers } from '../../redux/reducers/beersReducer';
import './searchBox.scss';

import filters from './constants';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState(filters.ByName);
  const [searchValue, setSearchValue] = useState('');

  const handleFilter = (filter) => {
    setSearchFilter(filter);
  };

  const handleGetBeersList = () => {
    dispatch(getBeers(searchFilter, searchValue));
  };

  return (
    <section id="searchBeer">
      <h2>Search</h2>
      <div className="searchBeer__bar">
        {searchFilter === filters.ByName ? (
          <input
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="write something..."
          />
        ) : (
          <input
            type="date"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
        )}

        <button
          type="button"
          onClick={handleGetBeersList}
          disabled={!searchFilter || searchValue.length < 3}
        >
          Search
        </button>
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
