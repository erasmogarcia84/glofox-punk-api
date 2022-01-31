import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { getBeers } from '../../redux/reducers/beersReducer';
import { filters, inputAllowedPattern } from './constants';
import Notification from '../Notification';
import './searchBox.scss';

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchFilter, setSearchFilter] = useState(filters.ByName);
  const [searchValue, setSearchValue] = useState('');

  const handleFilter = (filter) => {
    setSearchFilter(filter);
  };

  const handleValue = (value) =>
    inputAllowedPattern.test(value) || value === ''
      ? setSearchValue(value)
      : toast.error(Notification);

  const handleGetBeersList = () => {
    dispatch(getBeers(searchFilter, searchValue));
  };

  return (
    <section id="searchBeer" data-testid="search-box-section">
      <Toaster position="bottom-right" reverseOrder />
      <h2>Search</h2>
      <div className="searchBeer__bar">
        {searchFilter === filters.ByName ? (
          <input
            type="text"
            value={searchValue}
            onChange={(event) => handleValue(event.target.value)}
            placeholder="write something..."
            data-testid="input-text"
          />
        ) : (
          <input
            type="date"
            value={searchValue}
            onChange={(event) => handleValue(event.target.value)}
            data-testid="input-date"
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
