/* eslint-disable default-param-last */

import axios from 'axios';

const URL = 'https://api.punkapi.com/v2/beers/random';

export const actions = {
  GET_RANDOM_BEER: 'randomBeer/GET_RANDOM_BEER',
  GET_RANDOM_BEER_ERROR: 'randomBeer/GET_RANDOM_BEER_ERROR',
};

export const getRandomBeer = () => async (dispatch) => {
  try {
    const { data } = await axios(URL);
    const randomBeer = data[0];

    dispatch({
      type: actions.GET_RANDOM_BEER,
      randomBeer,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_RANDOM_BEER_ERROR,
      message: error.message,
    });
  }
};

export default function randomBeerReducer(randomBeer = null, action) {
  switch (action.type) {
    case actions.GET_RANDOM_BEER:
      return action.randomBeer;

    default:
      return randomBeer;
  }
}
