import React from 'react';
import PropTypes from 'prop-types';
import imagePlaceholder from '../../assets/images/placeholder.png';
import './searchResults.scss';

const SearchResultsItem = ({ beer }) => (
  <li className="card" key={beer.id}>
    <div className="card__image">
      <img
        src={beer.image_url || imagePlaceholder}
        alt={beer.name}
        title={beer.name}
        data-testid="beer-image"
      />
      <div className="card__title">
        <span className="card__title--dark" data-testid="item-beer-name">
          {beer.name}
        </span>
        <span className="card__title--light">{beer.tagline}</span>
      </div>
    </div>
    <p>{beer.description}</p>
  </li>
);

SearchResultsItem.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default SearchResultsItem;
