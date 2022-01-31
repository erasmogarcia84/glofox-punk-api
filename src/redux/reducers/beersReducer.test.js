import axios from 'axios';
import { filters } from '../../components/SearchBox/constants';
import { actions, getBeers } from './beersReducer';

jest.mock('axios');

describe('Given a beersReducer', () => {
  describe('When data cant be loaded', () => {
    test('Then returns message "Error loading Beers"', async () => {
      axios.mockRejectedValue(new Error('Error loading Beers'));

      const dispatch = jest.fn();
      const thunk = getBeers(filters.ByName, 'Any Value');
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith({
        type: actions.GET_BEERS_ERROR,
        message: 'Error loading Beers',
      });
    });
  });
});
