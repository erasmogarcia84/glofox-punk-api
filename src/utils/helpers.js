export const getRandomFromArray = (beers, prevBeer) => {
  const withoutPrevBeer = beers.filter((beer) => beer.id !== prevBeer.id);
  const randomIndex = Math.floor(Math.random() * withoutPrevBeer.length);

  return withoutPrevBeer[randomIndex];
};

export const formatDate = (initialDate) => {
  const newDate = initialDate.split('-').reverse().join('-').substr(3);

  return newDate;
};
