/* eslint-disable default-param-last */

import axios from 'axios';
import { getRandomFromArray } from '../../utils/helpers';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const MIN_ABV = process.env.REACT_APP_MIN_ABV;

export const actions = {
  GET_RANDOM_BEER: 'randomBeer/GET_RANDOM_BEER',
  GET_RANDOM_BEER_ERROR: 'randomBeer/GET_RANDOM_BEER_ERROR',
  GET_NON_ALCOHOLIC_RANDOM_BEER: 'randomBeer/GET_NON_ALCOHOLIC_RANDOM_BEER',
  GET_NON_ALCOHOLIC_RANDOM_BEER_ERROR:
    'randomBeer/GET_NON_ALCOHOLIC_RANDOM_BEER_ERROR',
};

export const getRandomBeer = () => async (dispatch) => {
  try {
    const { data } = await axios(`${BASE_URL}/random`);
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

export const getRandomNonAlcoholicBeer = () => async (dispatch, getState) => {
  try {
    const { data } = await axios(`${BASE_URL}?abv_lt=${MIN_ABV}`);
    const { randomBeer } = getState();
    const nextRandomBeer = getRandomFromArray(data, randomBeer);

    dispatch({
      type: actions.GET_NON_ALCOHOLIC_RANDOM_BEER,
      randomBeer: nextRandomBeer,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_NON_ALCOHOLIC_RANDOM_BEER_ERROR,
      message: error.message,
    });
  }
};

export default function randomBeerReducer(randomBeer = null, action) {
  switch (action.type) {
    case actions.GET_RANDOM_BEER:
    case actions.GET_NON_ALCOHOLIC_RANDOM_BEER:
      return action.randomBeer;

    default:
      return randomBeer;
  }
}
