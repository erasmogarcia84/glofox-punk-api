const getRandomFromArray = (beers, prevBeer) => {
  const withoutPrevBeer = beers.filter((beer) => beer.id !== prevBeer.id);
  const randomIndex = Math.floor(Math.random() * withoutPrevBeer.length);

  return withoutPrevBeer[randomIndex];
};

export default getRandomFromArray;
