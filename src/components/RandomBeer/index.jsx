import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRandomBeer,
  getRandomNonAlcoholicBeer,
} from '../../redux/reducers/randomBeerReducer';
import imagePlaceholder from '../../assets/images/placeholder.png';
import './randomBeer.scss';

const RandomBeer = () => {
  const dispatch = useDispatch();
  const randomBeer = useSelector((state) => state.randomBeer);

  const handleRandomBeer = (hasAlcohol = true) => {
    const randomBeerAction = hasAlcohol
      ? getRandomBeer
      : getRandomNonAlcoholicBeer;

    dispatch(randomBeerAction());
  };

  useEffect(() => {
    handleRandomBeer();
  }, []);

  return (
    randomBeer && (
      <section id="randomBeer" data-testid="random-beer-section">
        <div className="beerBox shadow">
          <div className="beerBox__image">
            <img
              src={randomBeer.image_url || imagePlaceholder}
              alt={randomBeer.image_url ? randomBeer.name : 'beer placeholder'}
            />
          </div>
          <div className="beerBox__info">
            <h2 data-testid="random-beer-name">{randomBeer.name}</h2>
            <p data-testid="random-beer-description">
              {randomBeer.description}
            </p>
            <div className="beerBox__buttons">
              <button
                type="button"
                onClick={handleRandomBeer}
                data-testid="random-beer-button"
              >
                Another Beer
              </button>
              <button
                type="button"
                onClick={() => handleRandomBeer(false)}
                data-testid="non-alcoholic-random-beer-button"
              >
                Random Non Alcoholic Beer
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default RandomBeer;
