import React from 'react';
import axios from 'axios';
import App from './App';
import { render, screen, fireEvent } from './utils/test-utils';
import {
  beersBeforeDateMock,
  beersMock,
  randomBeerMock,
} from './mocks/preloadedState';

jest.mock('axios');

describe('Given App component', () => {
  describe('When is rendered', () => {
    beforeEach(() => {
      render(<App />, {
        preloadedState: {
          randomBeer: randomBeerMock,
          beers: [],
        },
      });
    });

    test('Search Results section title is not in the document', () => {
      const sections = screen.getAllByRole('heading', { level: 2 });
      sections.forEach((section) => {
        expect(section.textContent).not.toBe('Search Results');
      });
    });
  });
});

describe('Given App component', () => {
  beforeEach(() => {
    axios.mockResolvedValue({
      data: beersMock,
    });
    render(<App />, {
      preloadedState: {
        randomBeer: randomBeerMock,
        beers: [],
      },
    });
  });

  describe('When "Black" text is written in the input', () => {
    describe('And "By Name" radio button is clicked', () => {
      test('Then 11 beer items are in the document', async () => {
        const radioByName = screen.getByRole('radio', { name: 'By Name' });
        fireEvent.click(radioByName);

        const textInput = screen.getByRole('textbox');
        fireEvent.change(textInput, { target: { value: 'Black' } });

        const searchButton = screen.getByRole('button', {
          name: 'Search',
        });
        fireEvent.click(searchButton);

        const items = await screen.findAllByTestId('item-beer-name');
        expect(items.length).toBe(11);
      });
    });
  });
});

describe('Given App component', () => {
  beforeEach(() => {
    axios.mockResolvedValue({
      data: beersBeforeDateMock,
    });
    render(<App />, {
      preloadedState: {
        randomBeer: randomBeerMock,
        beers: [],
      },
    });
  });

  describe('When "By Brewed Before" radio button is clicked', () => {
    describe('And 2012-10-10 is selected on input date', () => {
      test('Then 5 beer items are in the document', async () => {
        const radioByDate = screen.getByRole('radio', {
          name: 'By Brewed Before',
        });
        fireEvent.click(radioByDate);

        const dateInput = screen.getByTestId(/input-date/i);
        fireEvent.change(dateInput, { target: { value: '2012-12-01' } });

        const searchButton = screen.getByRole('button', {
          name: 'Search',
        });
        fireEvent.click(searchButton);

        const items = await screen.findAllByTestId('item-beer-name');
        expect(items.length).toBe(5);
      });
    });
  });
});
