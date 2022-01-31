import { combineReducers } from 'redux';
import randomBeer from './randomBeerReducer';
import beers from './beersReducer';

const rootReducer = combineReducers({
  randomBeer,
  beers,
});

export default rootReducer;
