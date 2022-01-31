import React from 'react';
import { useSelector } from 'react-redux';
import SearchResultsItem from './SearchResultsItem';
import './searchResults.scss';

const SearchResults = () => {
  const beers = useSelector((state) => state.beers);

  return (
    beers?.length > 0 && (
      <section id="searchResults">
        <h2>Search Results</h2>
        <p>(Found {beers.length} beers)</p>
        <div className="wrapper">
          <div className="mosaic">
            <ul>
              {beers?.map((beer) => (
                <SearchResultsItem beer={beer} key={beer.id} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    )
  );
};

export default SearchResults;
