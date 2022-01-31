/* eslint-disable default-param-last */
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const actions = {
  GET_BEERS: 'beers/GET_BEERS',
  GET_BEERS_ERROR: 'beers/GET_BEERS_ERROR',
};

export const getBeers = (filter, value) => async (dispatch) => {
  try {
    const { data } = await axios(`${BASE_URL}?${filter}=${value}`);

    dispatch({
      type: actions.GET_BEERS,
      data,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_BEERS_ERROR,
      message: error.message,
    });
  }
};

export default function beersReducer(beers = [], action) {
  return action.type === actions.GET_BEERS ? action.data : beers;
}
