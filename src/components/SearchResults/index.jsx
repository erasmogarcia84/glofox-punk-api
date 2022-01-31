import React from 'react';
import { useSelector } from 'react-redux';
import imagePlaceholder from '../../assets/images/placeholder.png';

const SearchResults = () => {
  const beers = useSelector((state) => state.beers);

  return (
    beers?.length > 0 && (
      <section id="searchResults">
        <h2>Search Results</h2>
        <p>(Found {beers.length} beers)</p>
        <ul>
          {beers?.map((beer) => (
            <li className="card" key={beer.id}>
              <div className="card__image">
                <img
                  src={beer.image_url || imagePlaceholder}
                  alt={beer.name}
                  title={beer.name}
                />
                <div className="card__title">
                  <span className="card__title--dark">{beer.name}</span>
                  <span className="card__title--light">{beer.tagline}</span>
                </div>
              </div>
              <p>{beer.description}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

export default SearchResults;
