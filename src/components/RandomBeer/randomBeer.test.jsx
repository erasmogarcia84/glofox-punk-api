import React from 'react';
import axios from 'axios';
import RandomBeer from '.';
import {
  randomBeerMock,
  randomNonAlcoholicMock,
} from '../../mocks/preloadedState';
import { render, screen, fireEvent } from '../../utils/test-utils';

jest.mock('axios');

describe('Given RandomBeer component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<RandomBeer />, {
        preloadedState: {
          randomBeer: randomBeerMock,
        },
      });
    });
    test('Then beer name is "Jack Hammer" ', () => {
      const beerLabel = screen.getByTestId(/random-beer-name/i);
      expect(beerLabel.textContent).toBe('Jack Hammer');
    });

    test('Then beer description is in the document.', () => {
      const beerDescription = screen.getByTestId(/random-beer-description/i);
      expect(beerDescription).toBeInTheDocument();
    });

    test('Then beer image alt "Jack Hammer" is in the document', () => {
      const beerImage = screen.getByAltText(/Jack Hammer/i);
      expect(beerImage).toBeInTheDocument();
    });

    ['random-beer-button', 'non-alcoholic-random-beer-button'].forEach(
      (testId) => {
        test(`Then "${testId}" is in the document`, () => {
          expect(screen.getByTestId(testId)).toBeInTheDocument();
        });
      }
    );
  });

  describe('When Another Beer is clicked', () => {
    beforeEach(() => {
      axios.mockResolvedValue({
        data: [{ ...randomBeerMock, name: 'Stoic Beer' }],
      });
      render(<RandomBeer />, {
        preloadedState: {
          randomBeer: randomBeerMock,
        },
      });
    });
    test('Then show another random beer', async () => {
      const button = screen.getByTestId('random-beer-button');
      fireEvent.click(button);
      expect(await screen.getByTestId(/random-beer-name/i).textContent).toBe(
        'Stoic Beer'
      );
    });
  });

  describe('And image_url is empty', () => {
    beforeEach(() => {
      render(<RandomBeer />, {
        preloadedState: {
          randomBeer: { ...randomBeerMock, image_url: '' },
        },
      });
    });
    test('Then render an image placeholder', async () => {
      expect(screen.getByAltText(/beer placeholder/i)).toBeInTheDocument();
    });
  });

  describe('When Random Non Alcoholic Beer is clicked', () => {
    beforeEach(() => {
      axios.mockResolvedValue({
        data: [randomNonAlcoholicMock],
      });
      render(<RandomBeer />, {
        preloadedState: {
          randomBeer: randomBeerMock,
        },
      });
    });
    test('Then show Nanny State beer', () => {
      const button = screen.getByTestId('non-alcoholic-random-beer-button');

      fireEvent.click(button);

      expect(screen.getByTestId(/random-beer-name/i).textContent).toBe(
        'Nanny State'
      );
    });
  });
});
