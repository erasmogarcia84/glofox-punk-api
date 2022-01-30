import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRandomBeer,
  getRandomNonAlcoholicBeer,
} from '../../redux/reducers/randomBeerReducer';

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
      <section id="randomBeer">
        <img src={randomBeer.image_url} alt={randomBeer.name} />
        <h2>{randomBeer.name}</h2>
        <p>{randomBeer.description}</p>
        <button type="button" onClick={handleRandomBeer}>
          Another Beer
        </button>
        <button type="button" onClick={() => handleRandomBeer(false)}>
          Random Non Alcoholic Beer
        </button>
      </section>
    )
  );
};

export default RandomBeer;
