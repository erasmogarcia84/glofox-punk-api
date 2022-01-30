import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomBeer } from '../../redux/reducers/randomBeerReducer';

const RandomBeer = () => {
  const dispatch = useDispatch();
  const randomBeer = useSelector((state) => state.randomBeer);

  const handleRandomBeer = () => {
    dispatch(getRandomBeer());
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
        <button type="button">Random Non Alcoholic Beer</button>
      </section>
    )
  );
};

export default RandomBeer;
