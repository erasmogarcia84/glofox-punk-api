import React from 'react';

const SearchBox = () => (
  <section id="searchBeer">
    <h2>Search</h2>
    <div className="searchBeer__bar">
      <input type="text" placeholder="write something..." />
      <button type="button">Search</button>
    </div>
    <div className="searchBeer__options">
      <div>
        <label htmlFor="searchFilter">
          <input type="radio" name="searchForm" id="searchFilter" />
          By Name
        </label>
      </div>
      <div>
        <label htmlFor="searchValue">
          <input type="radio" name="searchForm" id="searchValue" />
          By Brewed Before
        </label>
      </div>
    </div>
  </section>
);

export default SearchBox;
