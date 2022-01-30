import { combineReducers } from 'redux';
import randomBeer from './randomBeerReducer';

const rootReducer = combineReducers({
  randomBeer,
});

export default rootReducer;
